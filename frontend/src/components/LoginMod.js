import { useState } from 'react';
import {Link} from "react-router-dom";
import './Form.module.css';

export default function LoginMod() {
    const username = "username";
    const password = "password123";

    let [boolCheck, setBoolCheck] = useState(false);

    let [user, setUser] = useState('');
    let [pass, setPass] = useState('');
    
    async function login(){
        if (user === username && pass === password) {
            setBoolCheck(true);
            return;
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
                    <td style={{ padding: "0px 20px"}}><p>Username</p></td>
                    <td><input type='text' value={user} onChange={(e) => setUser(e.target.value)} placeholder='Username' /></td>
                </tr>
                <tr>
                    <td style={{ padding: "0px 20px"}}><p>Password</p></td>
                    <td><input type='text' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Passsword' /></td>
                </tr>
            </table>
            <Link to={(boolCheck ? '/' : '/login')}>
                <button style={{marginTop:"2vh", display: "block"}} type='submit'
                    onClick={
                        () => {
                            (async () => {
                                await login();
                            })();
                        }
                    }
                > Submit
                </button>
            </Link>
        </div>
    );
}