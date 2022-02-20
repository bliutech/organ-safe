import React, { useState } from 'react';
import './Match.module.css';
// import backend from '../components/Util.js';

let tests = [
  {
    key: "key1",
    hospital: "test",
    organType: "heart",
    bloodType: "B+",
    recipient: "personA",
    priority: 1
  },
  {
    key: "key2",
    hospital: "test",
    organType: "heart",
    bloodType: "B+",
    recipient: "personA",
    priority: 1
  }
]

function jsonMap(obj) {
  let result = {};
  for (var key in obj) {
    result[key] = obj[key];
  }
  return result;
}

function MatchMod({ results }) {
  console.log(results);
  return (<>{
    results.map(
      entry => {
        let person = jsonMap(entry);
        console.log(person)
        console.log(person.organType)
        return (
          <tr key={person.key}>
            <td>{person.organType}</td>
            <td>{person.bloodType}</td>
            <td>{person.hospital}</td>
            <td>{person.recipient}</td>
            <td>{person.priority}</td>
            <td><button onClick={() => alert('Assigned organ!')}> Assign </button></td>
          </tr>
        );
      }
    )
  }
  </>
  );
}

export default function Matches() {
  let [matches, setMatches] = useState([]);
  let isAdmin = true;
  document.title = 'Matches | OrganSafe';

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
  async function getMatches() {
    let resultsTemp = [];

    let dbSnapshot = [];
    dbSnapshot.forEach(
      user => {
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

  /*(async () => {
      const resultsTemp = await getMatches();
      setMatches(resultsTemp);
  })();*/


  return (
    <div>
      {/*<p>Waiting #: </p>*/}
      {/*waiting numer*/}
      <table>
        <thead>
          <tr>
            {/* make this fixed later on */}
            <th> Organ Type </th>
            <th> Blood Type </th>
            <th> Hospital </th>
            <th> Recipient </th>
            <th> Priority </th>
            {isAdmin ? (<th> Assign </th>) : <th />}
          </tr>
        </thead>
        <tbody>
          {/*()=>MatchMod(tests)*/}
          <MatchMod results={tests} />
        </tbody>
      </table>
    </div>
  );
}