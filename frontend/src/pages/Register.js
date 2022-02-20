import RegisterMod from '../components/RegisterMod.js'

export default function Register(){
    document.title = 'Register | OrganSafe';
    
    return(
        <div className='content'>
            <h1> Register </h1>
            <p> Register an account to get matched for an organ donation! </p>
            <RegisterMod />
        </div>
    );
}