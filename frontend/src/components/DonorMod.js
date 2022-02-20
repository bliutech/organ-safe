import { useState } from 'react';
import {Link} from "react-router-dom";

export default function DonorMod() {
    let [boolCheck, setBoolCheck] = useState(false);
    let [hospital, setHospital] = useState('');
    let [organType, setorganType] = useState('');
    let [bloodType, setbloodType] = useState('');

    async function submit(){
        if(hospital !== '' && organType !== '' && bloodType !== '')
        {
            setBoolCheck(true);
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
                    <td><p>Hospital Name</p></td>
                    <td><input type='text' value={hospital} onChange={(e) => setHospital(e.target.value)} placeholder='Name' /></td>
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
            <Link to={(boolCheck ? '/' : '/donor')}>
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