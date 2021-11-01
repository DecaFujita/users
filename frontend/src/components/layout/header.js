import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { DESKTOP_WIDTH, NAV_HEIGHT } from '../../assets';
import theme from '../../theme';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../user/login';
import '../../index.css';


const useStyles = makeStyles({
    nav: {
        backgroundColor: theme.color.grey.one,
        height: NAV_HEIGHT,
    },
    container: {
        height: '100%',
        width: DESKTOP_WIDTH,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontSize: '2rem',
        '&:focus': {
            outline: 'none',
            borderBottom: `1px solid ${theme.palette.primary.main}`
        }
    },
    menu: {
        fontSize: '1.4rem',
        position: 'relative'
        
    },
    navlink: {
        color: theme.palette.secondary.main,
        marginLeft: '3rem',
        '&:focus': {
            outline: 'none',
            borderBottom: `.1rem solid ${theme.palette.primary.main}`
        }
    },
    active: {
        color: theme.palette.primary.main,
        borderBottom: `.1rem solid ${theme.palette.primary.main}` 
    },
    btn: {
        background: 'white',
        padding: '.5rem 2rem',
        borderRadius: '20rem',
        marginLeft: '2rem',
        color: theme.palette.primary.main,
        border: '.15rem solid white',
        '&:focus': {
            outline: 'none',
            border: `.15rem solid ${theme.palette.primary.main}` 
        },
        '&:hover': {
            boxShadow: `1px 1px 1px ${theme.color.grey.two}`
        }
    },
    register: {
        width: DESKTOP_WIDTH,
        margin: '0 auto',
        textAlign: 'right',
        padding: '1rem 0',
        fontSize: '1.1rem',
        color: theme.palette.secondary.light
    },
    registerLink: {
        fontWeight: 'bold',
        color: 'inherit'
    }
})


function Header() {
    const { authData, setAuth } = useAuth('');
    const classes = useStyles();
    const history = useHistory();

    const logout = () => {
        setAuth(null);
        history.push('/');
    }
    return (
        <nav className={classes.nav}>
            <div className={classes.container}>
                <Link className={classes.logo} to='/'>Logo</Link>
                <div className={classes.menu}>
                    <NavLink exact to='/' activeClassName={classes.active} className={classes.navlink}>Home</NavLink>
                    <NavLink exact to='/account' activeClassName={classes.active} className={classes.navlink}>Account</NavLink>
                    {!authData ?
                        <button className={classes.btn} onClick={() => history.push('/login')}>Login</button>
                    :
                        <button className={classes.btn} onClick={() => logout()}>Logout</button>
                    }
                </div>
            </div>
            {!authData &&
                <div className={classes.register}>
                    <p>Don't have an account yet? <Link to='/register' className={classes.registerLink}> Register here </Link></p>
                </div>
            }
        </nav>
    )
};

export default Header;