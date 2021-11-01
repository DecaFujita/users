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
    const [ username, setUsername] = useState('');
    const [ password, setPassword ] = useState(''); 
    const { setAuth } = useAuth('');
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await auth({username, password}) // posting to API to get credentials token and user info
        setAuth(data) // sending user info to context provider
        history.push('/')
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <>
                <label>Username: </label>
                <input onChange={e => setUsername(e.target.value)} />
                </>
                <>
                <label>Password: </label>
                <input label='Password' type='password' onChange={e => setPassword(e.target.value)}/>
                </>
                <button variant='contained' color='primary' type='submit'>
                    Log in
                </button>
            </form>
        </div>
    )
};

export default LoginForm;