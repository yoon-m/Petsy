import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';

class ComingSoon extends React.Component {
    render() {
        return (
            <>
                <div className="nav-container">
                    <GreetingContainer />
                    <CategoryNav />
                    <h1>Coming Soon!</h1>
                    <Footer />
                </div>
            </>
        );
    }
}

export default ComingSoon;