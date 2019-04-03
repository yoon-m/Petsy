import React from 'react'
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import FooterNav from '../footer/footer_nav';
import FooterBanner from '../footer/footer_banner';

class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: 0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProduct(this.state).then(this.props.history.push('/'));
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        return(
            <>
                <div className="nav-container">
                    <GreetingContainer />
                    <CategoryNav />

                    <form>
                        <h2>Create a listing</h2>
                        <h4>Product Title:</h4>
                        <input type="text" value={this.state.title} onChange={this.handleChange('title')} />

                        <h4>Product Description:</h4>
                        <input type="text" value={this.state.description} onChange={this.handleChange('description')} />

                        <h4>Price:</h4>
                        <input type="number" min='0.01' step='0.01' onChange={this.handleChange('price')} />
                        <br></br>
                        <button onClick={this.handleSubmit}>Create Listing</button>
                    </form>

                    <footer className="footer-container">
                        <div className='footer-nav-container'>
                            <FooterNav />
                        </div>

                        <div className='help-currency-container'>
                            <div>
                                <p><i className="far fa-question-circle"></i> Need help? Visit the <a href="#" className='help'><span>help center</span></a></p>
                            </div>
                            <div>
                                <button className='currency-button'><img src={window.usaFlag} /> United States | English (US) | $ (USD)</button>
                            </div>
                        </div>

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

export default Sell;