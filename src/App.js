import {useState} from 'react'

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from './Components/AddTask';

function App() {
  const[showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'task 1',
        day: 'Aug 9th at 1:00pm',
        reminder: true

    },
    {
        id: 2,
        text: 'task 2',
        day: 'Aug 9th at 2:00pm',
        reminder: true
    },
    {
        id: 3,
        text: 'task 3',
        day: 'Aug 9th at 3:00pm',
        reminder: false
    }
  ])

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*100)+1
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title="Task Tracker"  onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : ('No Task To Show')}
    </div>
  );
}

export default App;
