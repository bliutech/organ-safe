import React,{ useState } from 'react';
import Match from '../components/Match.js';
// import backend from '../components/Util.js';

export default function Matches(){
    let [matches, setMatches] = useState([]);
    let isAdmin = true;
    document.title = 'Matches | OrganSafe';

    async function getMatches() {
        let resultsTemp = [];
        /*async function handleSubmit(uname, pass) {
            const data = {
                username: uname,
                password: pass
            }
            const res = await fetch(backend("/matches"), {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
        }*/

        let dbSnapshot = [{
            "test" : {
                hospital: "test",
                organType: "heart",
                bloodType: "B+",
                recipient: "personA",
                priority: 1
            }
        }]
        dbSnapshot.forEach(
            user =>{
                resultsTemp.push(
                    {
                        key: user.key,
                        hospital: user.hospital,
                        organType: user.organType,
                        bloodType: user.bloodType,
                        recipient: user.recipient,
                        priority: user.priority
                    }
                ); 
            }
        );
        console.log(resultsTemp);
        return resultsTemp;
    }

    (async () => {
        const resultsTemp = await getMatches();
        setMatches(resultsTemp);
    })();

    return(
        <div>
            <h1> Matches </h1>
            <p> Here are the available donors that matched your requirements. </p>
            <p>Waiting #: </p>
            {/*waiting numer*/}
            <table>
                <tr>
                    {/* make this fixed later on */}
                    <th> Organ Type </th>
                    <th> Blood Type </th>
                    <th> Hospital </th>
                    <th> Recipient </th>
                    <th> Priority </th>
                    {isAdmin ? <th> Assign </th>: <th/>}
                </tr>
                <Match results={matches}/>
            </table>
        </div>
    );
}