import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
          {tasks.map(
              (task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                )
              )
          }  
        </>
    )
}

export default Tasks


// const tasks = [
//     {
//         id: 1,
//         text: 'task 1',
//         day: 'Aug 9th at 1:00pm',
//         reminder: true

//     },
//     {
//         id: 2,
//         text: 'task 2',
//         day: 'Aug 9th at 2:00pm',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'task 3',
//         day: 'Aug 9th at 3:00pm',
//         reminder: false
//     }
// ]