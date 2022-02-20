import DonorMod from '../components/DonorMod.js';

export default function Donor(){
    document.title = 'Donors | OrganSafe';
    return(
        <div>
            <h1> Donate </h1>
            <p> Donate a new organ here! </p>
            <DonorMod />
        </div>
    );
}