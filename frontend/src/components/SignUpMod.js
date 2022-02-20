import { useState } from 'react';
import {Link} from "react-router-dom";
import './Form.module.css';

export default function SignUpMod() {
    let [boolCheck, setBoolCheck] = useState(false);

    let [user, setUser] = useState('');
    let [pass, setPass] = useState('');
    let [passCheck, setPassCheck] = useState('');
    let [name, setName] = useState('');

    async function submit(){
        if(pass !== passCheck)
        {
            alert('Passwords do not match!');
        }
        if(user !== '' && pass !== '' && name !== '' && pass === passCheck)
        {
            setBoolCheck(true);
            console.log('username: ' + user + ' password: ' + pass + 'name: ' + name);
            alert('Registered account!');
        }
    }

    return (
        <div>
            <table>
                <tr>
                    <th>{/* Text */}</th>
                    <th>{/* Fields */}</th>
                </tr>
                <tr>
                    <td><p>Username</p></td>
                    <td><input type='text' value={user} onChange={(e) => setUser(e.target.value)} placeholder='Username' /></td>
                </tr>
                <tr>
                    <td><p>Name</p></td>
                    <td><input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' /></td>
                </tr>
                <tr>
                    <td><p>Password</p></td>
                    <td><input type='text' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Passsword' /></td>
                </tr> 
                <tr>
                    <td><p> Confirm Password</p></td>
                    <td><input type='text' value={passCheck} onChange={(e) => setPassCheck(e.target.value)} placeholder='Passsword' /></td>
                </tr> 
            </table>
            <Link to={(boolCheck ? '/login' : '/signup')}>
                <button type='submit'
                    onClick={
                        () => {
                            (async () => {
                                await submit();
                            })();
                        }
                    }
                > Submit
                </button>
            </Link>
        </div>
    );
}