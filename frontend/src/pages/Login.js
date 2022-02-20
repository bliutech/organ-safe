import LoginMod from '../components/LoginMod.js';

export default function Login(){
    document.title = 'Login | OrganSafe';
    return(
        <div className='content'>
            <div className='content-left'>
                <h1> Login </h1>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    <LoginMod />
                </div>
            </div>
            <div className='content-right'>
                <img src="join-us.jpeg"/>
            </div>
        </div>
    );
}