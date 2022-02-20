import {Link} from 'react-router-dom';
import classes from './NavBar.module.css';

export default function NavBar(){
    // add different states to the NavBar later
    let isLoggedin = false;
    return(
        <header className={classes.header}>
            <h1 className={classes.logo}> </h1>
            <nav>
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/login'> Login </Link></li>
                    <li><Link to='/register'> Register </Link></li>
                    <li><Link to='/donor'> Donate </Link></li>
                </ul>
            </nav>
        </header>
    );
}