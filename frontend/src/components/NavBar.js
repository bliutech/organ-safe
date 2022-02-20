import {Link} from 'react-router-dom';
import classes from './NavBar.module.css';

function logout(){
    console.log("Logout called");
    localStorage.removeItem("authenticated");
    window.location.href = "http://localhost:3000/";
}

export default function NavBar(){
    // add different states to the NavBar later
    let isLoggedin = false;

    let authenticated = localStorage.getItem("authenticated");

    return(
        <header className={classes.header}>
            <h1 className={classes.logo}> </h1>
            <nav>
                <ul>
                    <li><Link style={{padding:"0px"}} to='/'><img style={{ width:"3vw", height:"auto"}} src="s-logo.png" /> </Link></li>
                    
                    {authenticated ? <li></li>: <li><Link to='/login'> Login </Link></li>}
                    {authenticated ? <li></li>: <li><Link to='/signup'> SignUp </Link></li>}

                    {authenticated ? <li><Link to='/register'> Become Recipient </Link></li> : <li></li>}
                    {/* {authenticated ? <li><Link to='/donor'> Become Donor </Link></li> : <li></li>} */}

                    {authenticated ? <li><a target="_blank" href="http://localhost:3001/">Become Donor</a></li> : <li></li>}
                    

                    {authenticated ? <li><Link to='/matches'> Recipient Waitlist</Link></li> : <li></li>}

                    {authenticated ? <li><button style={{border: "0px", background: "#fa4a4a" ,fontWeight: "550",fontSize: "larger", padding: "17px", marginLeft: "93vw"}} onClick={()=>{logout()}}> Logout </button></li> : <li></li>}

                    
                </ul>
            </nav>
        </header>
    );
}