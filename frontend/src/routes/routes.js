import { Component } from 'react';
import { Route, Redirect  } from 'react-router';


// After login, redirect to index.
const PublicRoute = ({component: Component, authed, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props => authed 
                ? <Redirect to={'/'}/>
                : <Component {...props} /> 
            }
        />
    )
}

// If authenticated, show account page. Else, index.
const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props => authed 
                ? <Component {...props} /> 
                : <Redirect to={'/'}/>}
        />
    )
}

export {PublicRoute, PrivateRoute};