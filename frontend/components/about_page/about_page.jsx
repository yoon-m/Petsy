import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';

class AboutPage extends React.Component {
    render() {
        return (
            <>
                <div className='nav-container'>
                    <GreetingContainer />
                    <CategoryNav />


                    <div className='about-top'>
                        <div className='about-socials-left'>
                            <a href="http://www.linkedin.com/in/yoon-m"><i className="fab fa-linkedin"></i></a>
                            <a href="http://www.github.com/yoon-m"><i className="fab fa-github-square"></i></a>
                        </div>
                        
                        <div className='about-mid'>
                            <h1>Michael Yoon</h1>

                            <img src={window.aboutImg} />
                        </div>
                        
                        
                        <div className='about-socials-right'>
                            <a href="https://angel.co/yoon-m"><i className="fab fa-angellist"></i></a>
                            <a href="mailto:myoon1098@gmail.com"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>

                    <div className='about-blurb'>
                        <p>Professional online poker player turned software engineer.
                            I'm passionate about problem solving, and thinking about the
                            different approaches to solving a particular problem. Love
                            starting projects from scratch and seeing them come to life.
                            Proficient in: Ruby on Rails, Javascript, React, Redux, SQL, and more.</p>

                        <br />

                        <p>When I'm not coding I enjoy playing/watching basketball,
                            bouldering, and board games!</p>
                    </div>

                    <Footer />
                </div>
            </>
        );
    }
}

export default AboutPage;