import { useState } from 'react';
import {Link} from "react-router-dom";
import './Form.module.css';

export default function RegisterMod() {
    let [boolCheck, setBoolCheck] = useState(false);

    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [organType, setorganType] = useState('');
    let [bloodType, setbloodType] = useState('');
    let [severity, setSeverity] = useState('');
    let [urgency, setUrgency] = useState('');

    async function submit(){
        if(name !== '' && age  !== '' && organType !== '' && bloodType !== '' && severity !=='' && urgency !=='')
        {
            setBoolCheck(true);
            let existing_recipients = JSON.parse(localStorage.getItem("recipients"));
            if(!existing_recipients){
                existing_recipients=[]
                localStorage.setItem("recipients",JSON.stringify(existing_recipients));
            }
            let score = 2*parseInt(age) + 3*parseInt(severity) + 4*parseInt(urgency);
            let recipient={'name':name,'age':age,'organ':organType,'blood':bloodType,'severity':severity,'urgency':urgency,'score':score};
            existing_recipients.push(recipient);
            existing_recipients.sort((a,b) => (a.score < b.score) ? 1:-1);
            localStorage.setItem("recipients",JSON.stringify(existing_recipients));
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
                    <td><p>Name</p></td>
                    <td><input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' /></td>
                </tr>
                <tr>
                    <td><p>Age</p></td>
                    <td><input type='number' min='1' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' /></td>
                </tr>
                <tr>
                    <td><p>Organ Type</p></td>
                    <td><input type='text' value={organType} onChange={(e) => setorganType(e.target.value)} placeholder='Organ Type' /></td>
                </tr>
                <tr>
                    <td><p>Blood Type</p></td>
                    <td><input type='text' value={bloodType} onChange={(e) => setbloodType(e.target.value)} placeholder='Blood Type' /></td>
                </tr>
                <tr>
                    <td><p>Severity</p></td>
                    <td><input type='number' min='0' max='10' value={severity} onChange={(e) => setSeverity(e.target.value)} placeholder='0-10' /></td>
                </tr>
                <tr>
                    <td><p>Urgency</p></td>
                    <td><input type='number' min='0' max='10' value={urgency} onChange={(e) => setUrgency(e.target.value)} placeholder='0-10' /></td>
                </tr>

            </table>
            <Link to={(boolCheck ? '/matches' : '/register')}>
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