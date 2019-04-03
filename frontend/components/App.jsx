import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';
import CategoryNav from './category_nav/category_nav';
import FooterBanner from './footer/footer_banner';
import FooterNav from './footer/footer_nav';
import About from './footer/about';
import Blog from './blog/blog';
import Gifts from './gifts/gifts';
import Latest from './latest/latest';
import MainContainer from './main/main_container';

const App = () => (
    <div className="main-container">
        <div className="nav-container">
            <Modal />
            
                <GreetingContainer />
                <CategoryNav />
            
        </div>

        <div className='nav-container'>
            <MainContainer/>
            <Latest />
            <Gifts />
            <Blog />
        </div>

        <About />

        <div className="nav-container">
            <footer className="footer-container">
                <div className='footer-nav-container'>
                    <FooterNav />
                </div>

                <div className='help-currency-container'>
                    <div>
                        <p><i className="far fa-question-circle"></i> Need help? Visit the <a href="#" className='help'><span>help center</span></a></p>
                    </div>
                    <div>
                        <button className='currency-button'><img src={window.usaFlag}/> United States | English (US) | $ (USD)</button>
                    </div>
                </div>

                <div className='footer-banner-top'></div>
                <div className='footer-banner-container'>
                    <FooterBanner />
                </div>
            </footer>
        </div>
        {/* unnecessary routes b/c we're using MODALS */}
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;