import Button from '../UI/Button'
import './Navigation.css'

const Navigation = (props) => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <a href='/user'>User</a>
                </li>
                <li>
                    <a href='/admin'>Admin</a>
                </li>
               {
                props.loggedIn && (
                    <li>
                        <Button onClick={props.onLogout} >Log Out</Button>
                    </li>
                )
               } 
            </ul>
        </nav>
    )
} 

export default Navigation