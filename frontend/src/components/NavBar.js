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
                    <li><Link style={{padding:"0px"}} to='/'><img style={{ width:"auto", height:"60px"}} src="s-logo.png" /> </Link></li>
                    <li><Link to='/login'> Login </Link></li>
                    <li><Link to='/signup'> Sign Up </Link></li>
                    <li><Link to='/register'> Become Recipient </Link></li>
                    <li><Link to='/donor'> Become Donor </Link></li>
                </ul>
            </nav>
        </header>
    );
}