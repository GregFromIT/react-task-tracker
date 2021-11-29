import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className = 'header'>
            <h1>{title}</h1>
            {/* <Button color='green' text='Hello' /> */}
            <Button color = 'darkgrey' text = 'add' onClick = {onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Hello',
}

Header.prototype = {
    title: PropTypes.string,
}

// CSS in JS
// const headingStyle = {    
//     color: 'red', 
//     backgroundColor: 'black',
// };

export default Header
