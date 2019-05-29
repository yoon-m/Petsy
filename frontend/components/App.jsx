import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import CategoryNav from './category_nav/category_nav';
import About from './footer/about';
import Blog from './blog/blog';
import Gifts from './gifts/gifts';
import Latest from './latest/latest';
import MainContainer from './main/main_container';
import Footer from './footer/footer';

const App = () => (
    <div className="main-container">
        <div className="nav-container">
            <Modal />
            <GreetingContainer />
            <CategoryNav />
            <MainContainer/>
            <Latest />
            <Gifts />
            <Blog />
        </div>

        <About />
        <Footer />
    </div>
);

export default App;