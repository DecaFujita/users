import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../services/user-services';
import { auth } from '../../services/user-services';


function Register() {

    const { authData, setAuth } = useAuth();
    const history = useHistory();
    const [ username, setUsername] = useState('');
    const [ password, setPassword ] = useState(''); 
    const [ password2, setPassword2 ] = useState(''); 
    const [ email, setEmail ] = useState(''); 

    const passMatch = () => {
        return password === password2; //returns true if passwords match
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if (passMatch()) {
            const regData = await register({username, email, password, profile: {is_premium: false}});
            if (regData) {
                //logging in
                const data = await auth({username, password}) // posting to API to get credentials token and user info
                setAuth(data) // sending user info to context provider
                history.push('/account');
            }
        } else {
            console.log('not ok')
        }
    }
    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label type='text'>Username: </label>
                    <input onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label type='email'>Email: </label>
                    <input onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label> Repeat password: </label>
                    <input type='password' onChange={e => setPassword2(e.target.value)} />
                </div>
                <button type='submit'>
                    Register
                </button>
            </form>
        </div>
    )
}



export default Register;
