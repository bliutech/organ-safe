export default function Match(props) {
  return (
    <div>
      {props.results.map(
        person => {
          return (
            <tr key={person.key}>
              <td>{person.organType}</td>
              <td>{person.bloodType}</td>
              <td>{person.hospital}</td>
              <td>{person.recipient}</td>
              <td>{person.priority}</td>
              <td><button onClick={()=>alert('Assigned organ!')}> Assign </button></td>
            </tr>
          )
        }
      )}
    </div>
  )
}