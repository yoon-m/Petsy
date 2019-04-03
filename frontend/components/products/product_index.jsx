import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import FooterNav from '../footer/footer_nav';
import FooterBanner from '../footer/footer_banner';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts().then(() => this.props.history.push('/products'));
    }

    render() {
        return(
            <>
                <div className="nav-container">
                    <GreetingContainer />
                    <CategoryNav />

                    <h1>Product Index</h1>
                    <ul>
                        {Object.values(this.props.products).map((product, idx) => {
                            return (
                                <div key={idx} className='product-item'>
                                    <Link to={`products/${product.id}`}>
                                        <li key={product.id}>{product.title}</li>
                                    </Link>
                                </div>
                            );
                        })}
                    </ul>

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

export default ProductIndex;