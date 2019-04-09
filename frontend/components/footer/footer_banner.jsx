import React from 'react';

class FooterBanner extends React.Component {
    render() {
        return (
            <>
                <div className='footer-banner-left'>
                    <a href="/"><img src={'https://s3.amazonaws.com/aa-petsy-public/petsyWhiteSquareCropped.png'} className='navLogo' /></a>
                    <p>We make it easy to find your thing.</p>
                </div>
                
                <div className='footer-banner-right'>
                    <p>&copy; 2019 Petsy, Inc.</p>
                    <a href='#'>Terms of Use</a>
                    <a href='#'>Privacy</a>
                    <a href='#'>Interest-based ads</a>
                </div>
            </>
        );
    }
}

export default FooterBanner;