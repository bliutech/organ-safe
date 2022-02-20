import DonorMod from '../components/DonorMod.js';
import '../App.css';

export default function Donor(){
    document.title = 'Donors | OrganSafe';
    return(
        <div className='content'>
        <div className='content-left'>
            <h1> Become a Donor </h1>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <DonorMod />
            </div>
        </div>
        <div className='content-right'>
            <img src="donate.jpeg"/>
        </div>
        </div>
    );
}