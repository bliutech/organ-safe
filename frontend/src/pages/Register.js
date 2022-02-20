import RegisterMod from '../components/RegisterMod.js'

export default function Register(){
    document.title = 'Register | OrganSafe';
    
    return(
        <div className='content'>
        <div className='content-left'>
            <h1> Become Recipient </h1>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <RegisterMod />
            </div>
        </div>
        <div className='content-right'>
            <img src="join-us.jpeg"/>
        </div>
        </div>
    );
}