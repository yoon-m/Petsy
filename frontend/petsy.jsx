import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // test
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = SessionAPIUtil.login;
    window.logout = SessionAPIUtil.logout;
    window.signup = SessionAPIUtil.signup;
    // test

    ReactDOM.render(<h1>Petsy!</h1>, document.getElementById('root'))
});