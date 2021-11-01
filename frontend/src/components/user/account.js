import { useState } from 'react';
import { auth } from '../../services/user-services'; // posts username + password to api
import { useAuth } from '../../hooks/useAuth';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles = makeStyles({
    container: {
        width: '400px',
        margin: '0 auto',
    },
    form: {
        marginTop: '2rem',
        marginBottom: '2rem',
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        '& input': {
            margin: '15px 0 30px 0'
        }
    },
    btn: theme.btn.primary
})

function LoginForm() {
    const classes = useStyles();
    const [ password, setPassword ] = useState(''); 
    const [ password2, setPassword2 ] = useState(''); 
    const [ email, setEmail ] = useState(''); 
    const { authData, setAuth } = useAuth('');
    const history = useHistory();

    const passMatch = () => {
        return password === password2; //returns true if passwords match
    }
    const handleSubmit = async e => {
        e.preventDefault();
        
    }
    return (
        <div className={classes.container}>
            <h1>Hello, {authData.user.username}! </h1>
                <p>Do you want to change you password?</p>
                <form onSubmit={handleSubmit}>
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
};

export default LoginForm;