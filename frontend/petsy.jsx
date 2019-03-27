import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TEST!!!!!!!!!!!!!!!!!!!!!!
    import * as SessionAPIUtil from './util/session_api_util';
// TEST!!!!!!!!!!!!!!!!!!!!!!

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // TEST!!!!!!!!!!!!!!!!!!!
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = SessionAPIUtil.login;
    window.logout = SessionAPIUtil.logout;
    window.signup = SessionAPIUtil.signup;
    // TEST!!!!!!!!!!!!!!!!!!!

    ReactDOM.render(<Root store={ store }/>, document.getElementById('root'))
});