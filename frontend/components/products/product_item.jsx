import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import FooterNav from '../footer/footer_nav';
import FooterBanner from '../footer/footer_banner';

class ProductItem extends React.Component {
    componentDidMount() {
        this.props.fetchProducts().then(this.props.fetchProduct(this.props.match.params.productId));
    }

    render() {
        let productDescription = null;
        let productOwner = null;
        let productPrice = null;
        let productRating = null;
        let productTitle = null;
        let ratingStars = (
            <div className='rating-stars'>
                <i className="fas fa-star rs1"></i>
                <i className="fas fa-star rs2"></i>
                <i className="fas fa-star rs3"></i>
                <i className="fas fa-star rs4"></i>
                <i className="fas fa-star rs5"></i>
            </div>
        );

        if (this.props.product) {
            productDescription = this.props.product.description.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');;
            productOwner = this.props.product.first_name;
            productPrice = this.props.product.price;
            productTitle = this.props.product.title.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');;
            productRating = this.props.product.rating;
            $('.rs1').css('color', 'grey')
            $('.rs2').css('color', 'grey')
            $('.rs3').css('color', 'grey')
            $('.rs4').css('color', 'grey')
            $('.rs5').css('color', 'grey')
            if (Math.round(this.props.product.rating) === 1) {
                $('.rs1').css('color', 'gold')
            } else if (Math.round(this.props.product.rating) === 2) {
                $('.rs1').css('color', 'gold')
                $('.rs2').css('color', 'gold')
            } else if (Math.round(this.props.product.rating) === 3) {
                $('.rs1').css('color', 'gold')
                $('.rs2').css('color', 'gold')
                $('.rs3').css('color', 'gold')
            } else if (Math.round(this.props.product.rating) === 4) {
                $('.rs1').css('color', 'gold')
                $('.rs2').css('color', 'gold')
                $('.rs3').css('color', 'gold')
                $('.rs4').css('color', 'gold')
            } else if (Math.round(this.props.product.rating) === 5) {
                $('.rs1').css('color', 'gold')
                $('.rs2').css('color', 'gold')
                $('.rs3').css('color', 'gold')
                $('.rs4').css('color', 'gold')
                $('.rs5').css('color', 'gold')
            }
        }
        
        return (
            <>
                <div className="nav-container">
                    <GreetingContainer />
                    <CategoryNav />

                    <div className='show-container'>
                        <div className='show-left'>
                            IMAGE CAROUSEL
                        </div>

                        <div className='show-right'>
                            <h4 className='product-owner'><a href="#">{productOwner}</a></h4>{ratingStars}
                            <p className='product-title'>{productTitle}</p>
                            <p className='product-price'>${productPrice}</p>
                            <p>Free shipping</p>

                            <button className='buy-now-btn'>Buy it now</button>
                            <button className='add-cart-btn'>Add to cart</button>

                            <hr>
                            </hr>
                        </div>
                    </div>

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

export default ProductItem;