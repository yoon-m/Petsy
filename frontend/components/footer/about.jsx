import React from 'react';

class About extends React.Component {
    render() {
        return (
            <>
                <div className='about'>
                    <div className='about-header'>
                        <h2>What is Petsy?</h2>
                        <a href="#"><p>Read our wonderfully weird story</p></a>
                    </div>

                    <div className='about-column-container'>
                        <div className='about-column about-column1'>
                            <h4>A one-of-a-kind community</h4>
                            <p>Petsy is a global online marketplace, where people come together 
                                to make, sell, buy, and collect unique items.</p>
                        </div>

                        <div className='about-column about-column2'>
                            <h4>Support independent creators</h4>
                            <p>There’s no Petsy warehouse – just millions of people selling 
                                the things they love. We make the whole process easy, 
                                helping you connect directly with makers to find something 
                                extraordinary.</p>
                        </div>
                        
                        <div className='about-column about-column3'>
                            <h4>Peace of mind</h4>
                            <p>Your privacy is the highest priority of our dedicated team. 
                                And if you ever need assistance, we are always ready to 
                                step in for support.</p>
                        </div>
                    </div>

                    <div className='about-footer'>
                        <div className='about-blue'>
                            <img src={'https://s3.amazonaws.com/aa-petsy-public/aboutPetsyBlue.jpg'} />
                        </div>

                        <div className='about-orange'>
                            <img src={'https://s3.amazonaws.com/aa-petsy-public/aboutPetsyOrange.jpg'} />
                        </div>

                        <div className='about-yellow'>
                            <img src={'https://s3.amazonaws.com/aa-petsy-public/aboutPetsyYellow.jpg'} />
                        </div>

                        <h3>Have a question? Well, we've got some answers.</h3>
                        <a className='help-center-btn' href='#'>Go to help center</a>
                    </div>
                </div>
            </>
        );
    }
}

export default About;