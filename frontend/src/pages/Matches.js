import Match from '../components/Match.js';
// import backend from '../components/Util.js';

export default function Matches(){
    document.title = 'Matches | OrganSafe';

    return(
        <div>
            <h1> Matches </h1>
            <p> Here are the available donors that matched your requirements. </p>
            {/*<p>Waiting #: </p>*/}
            {/*waiting numer*/}
            <Match />
        </div>
    );
}