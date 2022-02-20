import SignUpMod from '../components/SignUpMod';
import RegisterMod from '../components/SignUpMod'

export default function SignUp(){
    document.title = 'SignUp | OrganSafe';
    
    return(
        <div className='content'>
        <div className='content-left'>
            <h1> SignUp </h1>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <SignUpMod />
            </div>
        </div>
        <div className='content-right'>
            <img src="join-us.jpeg"/>
        </div>
        </div>
    );
}