import React from 'react';

class FooterMain extends React.Component {
    render() {
        return (
            <>
                <div className='help-currency-container'>
                    <div>
                        <p><i className="far fa-question-circle"></i> Need help? Visit the <a href="#" className='help'><span>help center</span></a></p>
                    </div>
                    <div>
                        <button className='currency-button'><img src={window.usaFlag} /> United States | English (US) | $ (USD)</button>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterMain;