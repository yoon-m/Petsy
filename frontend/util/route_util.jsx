import React from 'react';
import { Route, Redirect, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route path={path} exact={exact} render={(props) => (
            !loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to='/' />
            )
        )} />
    );
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route path={path} exact={exact} render={(props) => (
            loggedIn ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
                )
        )} />
    );
}

const msp = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp, null)(Protected));