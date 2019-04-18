import React from 'react';

class FooterMain extends React.Component {
    render() {
        return (
            <>
                <div className='help-currency-container'>
                    <div>
                        <p><i className="far fa-question-circle"></i> Need help? Visit the <a href="/#/about" className='help'><span>help center</span></a></p>
                    </div>
                    <div>
                        <button className='currency-button'><img src='https://s3.amazonaws.com/aa-petsy-public/usaFlag.png' /> United States | English (US) | $ (USD)</button>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterMain;