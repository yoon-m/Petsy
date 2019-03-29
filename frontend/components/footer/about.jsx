import React from 'react';

class About extends React.Component {
    render() {
        return (
            <>
                {/* <div className='about'>
                    <img src={window.aboutPetsy} />
                </div> */}

                <div>
                    <h2>What is Etsy?</h2>
                    <a href="#"><p>Read our wonderfully weird story</p></a>

                    <div>
                        <h4>A one-of-a-kind community</h4>
                        <p>Etsy is a global online marketplace, where people come together 
                            to make, sell, buy, and collect unique items.</p>
                    </div>

                    <div>
                        <h4>Support independent creators</h4>
                        <p>There’s no Etsy warehouse – just millions of people selling 
                            the things they love. We make the whole process easy, 
                            helping you connect directly with makers to find something 
                            extraordinary.</p>
                    </div>
                    
                    <div>
                        <h4>Peace of mind</h4>
                        <p>Your privacy is the highest priority of our dedicated team. 
                            And if you ever need assistance, we are always ready to 
                            step in for support.</p>
                    </div>

                    <div>
                        <h3>Have a question? Well, we've got some answers.</h3>
                        <button className='help-center-btn'>Go to help center</button>
                    </div>
                </div>
            </>
        );
    }
}

export default About;