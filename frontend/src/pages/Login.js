import LoginMod from '../components/LoginMod.js';

export default function Login(){
    document.title = 'Login | OrganSafe';
    return(
        <div className='content'>
            <h1> Login </h1>
            <p> Login to your account! </p>
            <LoginMod />
        </div>
    );
}