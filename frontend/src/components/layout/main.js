import { Switch, Route } from 'react-router-dom';
import LoginForm from '../user/login';
import { useAuth } from '../../hooks/useAuth';
import Register from '../user/register';
import Account from '../user/account';
import { makeStyles } from '@mui/styles';
import { DESKTOP_WIDTH } from '../../assets';
import theme from '../../theme';
import { PublicRoute, PrivateRoute } from '../../routes/routes';

const useStyles = makeStyles({
    container: {
        width: DESKTOP_WIDTH,
        margin: '0 auto',
    },
})

function Main() {
    const classes = useStyles();
    const { authData } = useAuth();

    return (
        <div className={classes.container}>
            {authData && <h3>Hello, {authData.user.username}</h3>}
            <Switch>
                <Route exact path ='/'>
                    <h1>Index</h1>
                    {/* <GroupList /> */}
                </Route>
                <Route exact path ='/register'>
                    <Register />
                </Route>
                <PublicRoute 
                    authed={authData}
                    exact path='/login'
                    component={LoginForm}
                />
                <PrivateRoute 
                    authed={authData}
                    exact path='/account'
                    component={Account}
                />
            </Switch>
            
        </div>
    )
};

export default Main;