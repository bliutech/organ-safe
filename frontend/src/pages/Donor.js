import DonorMod from '../components/DonorMod.js';
import '../App.css';

export default function Donor(){
    document.title = 'Donors | OrganSafe';
    return(
        <div className='content'>
            <h1> Donate </h1>
            <p> Donate a new organ here! </p>
            <DonorMod />
        </div>
    );
}