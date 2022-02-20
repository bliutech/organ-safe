import React, { useState } from 'react';
import './Match.module.css';
// import backend from '../components/Util.js';

// let tests = [
//   {
//     key: "key1",
//     hospital: "test",
//     organType: "heart",
//     bloodType: "B+",
//     recipient: "personA",
//     priority: 1
//   },
//   {
//     key: "key2",
//     hospital: "test",
//     organType: "heart",
//     bloodType: "B+",
//     recipient: "personA",
//     priority: 1
//   }
// ]

let tests = JSON.parse(localStorage.getItem("recipients"));

let search = window.location.search;
let params = new URLSearchParams(search);
let foo = params.get('assign');
console.log(tests, foo)

if(tests && foo){
  tests.shift();
  localStorage.setItem("recipients",JSON.stringify(tests));
  window.location.href="http://localhost:3000/matches"
}

function jsonMap(obj) {
  let result = {};
  for (var key in obj) {
    result[key] = obj[key];
  }
  return result;
}

function MatchMod({ results }) {
  return (<>{
    results.map(
      entry => {
        let person = jsonMap(entry);
        return (
          <tr key={person.name + person.score + person.age}>
            <td style={{textAlign:"Center"}}>{person.name}</td>
            <td style={{textAlign:"Center"}}>{person.age}</td>
            <td style={{textAlign:"Center"}}>{person.organ}</td>
            <td style={{textAlign:"Center"}}>{person.blood}</td>
            <td style={{textAlign:"Center"}}>{person.severity}</td>
            <td style={{textAlign:"Center"}}>{person.urgency}</td>
            <td style={{textAlign:"Center"}}>{person.score}</td>
            <td style={{textAlign:"Center"}}><button onClick={() => alert('Assigned organ!')}> Assign </button></td>
          </tr>
        );
      }
    )
  }
  </>
  );
}

// function MatchMod({ results }) {
//   return(<>{
//     tests.forEach(person => {
//       return(
//         <tr>
//           <td>{person[0]}</td>
//           <td>{person[1]}</td>
//           <td>{person[2]}</td>
//           <td>{person[3]}</td>
//           <td>{person[4]}</td>
//           <td>{person[5]}</td>
//           <td><button onClick={() => alert('Assigned organ!')}> Assign </button></td>
//         </tr>
//       )
//     })
//   }
//   </>
//   );
// }

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
  // async function getMatches() {
  //   let resultsTemp = [];

  //   let dbSnapshot = [];
  //   dbSnapshot.forEach(
  //     user => {
  //       resultsTemp.push(
  //         {
  //           key: user.key,
  //           hospital: user.hospital,
  //           organType: user.organType,
  //           bloodType: user.bloodType,
  //           recipient: user.recipient,
  //           priority: user.priority
  //         }
  //       );
  //     }
  //   );
  //   console.log(resultsTemp);
  //   return resultsTemp;
  // }

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
            <th> Recipient Name </th>
            <th> Age </th>
            <th> Organ type </th>
            <th> Blood Group </th>
            <th> Severity </th>
            <th> Urgency </th>
            <th> Score </th>
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