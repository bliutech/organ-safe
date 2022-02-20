import { useState } from 'react';
import {Link} from "react-router-dom";
import './Form.module.css';

export default function RegisterMod() {
    let [boolCheck, setBoolCheck] = useState(false);

    let [user, setUser] = useState('');
    let [pass, setPass] = useState('');
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [organType, setorganType] = useState('');
    let [bloodType, setbloodType] = useState('');

    async function submit(){
        if(user !== '' && pass !== '' && name !== '' && age  !== '' && organType !== '' && bloodType !== '')
        {
            setBoolCheck(true);
            console.log('username: ' + user + ' password: ' + pass + 'name: ' + name + " age: " + age +  " organType: " + organType + " bloodType: " + bloodType);
            alert('Submitted Donation');
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
                    <td><p>Password</p></td>
                    <td><input type='text' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Passsword' /></td>
                </tr> 
                <tr>
                    <td><p>Name</p></td>
                    <td><input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' /></td>
                </tr>
                <tr>
                    <td><p>Age</p></td>
                    <td><input type='int' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' /></td>
                </tr>
                <tr>
                    <td><p>Organ Type</p></td>
                    <td><input type='text' value={organType} onChange={(e) => setorganType(e.target.value)} placeholder='Organ Type' /></td>
                </tr>
                <tr>
                    <td><p>Blood Type</p></td>
                    <td><input type='text' value={bloodType} onChange={(e) => setbloodType(e.target.value)} placeholder='Blood Type' /></td>
                </tr>
            </table>
            <Link to={(boolCheck ? '/' : '/register')}>
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