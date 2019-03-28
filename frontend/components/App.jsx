import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import CategoryNav from './category_nav/category_nav';

const App = () => (
    <div className="main-container">
        <Modal />
        <header>
            <GreetingContainer />
            <CategoryNav />
        </header>

        {/* unnecessary routes b/c we're using MODALS */}
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;