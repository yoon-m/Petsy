import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import CategoryNav from './category_nav/category_nav';
import FooterBanner from './footer/footer_banner';
import FooterNav from './footer/footer_nav';
import About from './footer/about';

const App = () => (
    <div className="main-container">
        <Modal />
        <header>
            <GreetingContainer />
            <CategoryNav />
        </header>


        <footer className="footer-container">
            <About />
            <div className='footer-nav-container'>
                <FooterNav />
            </div>

            <div className='help-currency-container'>
                <div>
                    <p><i className="far fa-question-circle"></i> Need help? Visit the <a href="#" className='help'><span>help center</span></a></p>
                </div>
                <div>
                    <button>United States | English (US) | $ (USD)</button>
                </div>
            </div>

            <div className='footer-banner-container'>
                <FooterBanner />
            </div>
        </footer>
        {/* unnecessary routes b/c we're using MODALS */}
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;