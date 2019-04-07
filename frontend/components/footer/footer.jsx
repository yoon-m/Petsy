import React from 'react';
import FooterNav from './footer_nav';
import FooterMain from './footer_main';
import FooterBanner from './footer_banner';

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="nav-container">
                    <footer className="footer-container">
                        <div className='footer-nav-container'>
                            <FooterNav />
                        </div>

                        <FooterMain />

                        <div className='footer-banner-top'></div>
                        <div className='footer-banner-container'>
                            <FooterBanner />
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

export default Footer;