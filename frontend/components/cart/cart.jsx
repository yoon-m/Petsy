import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import FooterNav from '../footer/footer_nav';
import FooterBanner from '../footer/footer_banner';
import CartItem from './cart_item';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        // this.handlePay = this.handlePay.bind(this);
    }

    componentDidMount() {
        this.props.fetchCart(this.props.currentUser.id);
    }

    // handlePay(e) {
    //     e.preventDefault();
    //     this.props.deleteCart().then(this.props.history.push('/'));
    // }

    render() {
        let cart_items = [];
        let cart_count;
        let cart_total = 0;
        if (this.props.cart_items) {
            cart_items = Object.values(this.props.cart_items);
            cart_count = cart_items.length;
            cart_items.forEach(item => cart_total += item.price);
            if (cart_count === 1) {
                cart_count = (<h3 className='cart-count'>{cart_count} item in your cart</h3>)
            } else {
                cart_count = (<h3 className='cart-count'>{cart_count} items in your cart</h3>)
            }
        }

        return(
            <>
                <div className="nav-container">
                    <GreetingContainer />
                    <CategoryNav />
                </div>

                    <div className='cart-container'>
                        {cart_count}
                        <div className='cart-item-container'>
                            <div className='cart-item-left'>
                                {cart_items.map(item => {
                                    return <a key={item.id} href={`#/products/${item.product_id}`}><CartItem item={item} /></a>
                                })}
                            </div>

                            <div className='cart-vl'></div>

                            <div className='cart-item-right'>
                                Total: ${cart_total}
                                <br></br>
                                <button>Pay now</button>
                            </div>
                        {/* <button onClick={() => this.props.clearCart(this.props.cart.id)}>Clear Cart</button> */}
                        </div>
                    </div>

                <div className="nav-container">
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
        )
    }
}

export default Cart;