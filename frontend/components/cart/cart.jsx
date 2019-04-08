import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.handlePay = this.handlePay.bind(this);
    }

    componentDidMount() {
        this.props.fetchCart(this.props.currentUser.id);
    }

    handlePay(e) {
        if (this.props.cart) {
            e.preventDefault();
            alert('Thanks for testing my website!');
            let itemIds = [];
            Object.values(this.props.cart).map(item => {
                itemIds.push(item.id);
            });

            this.props.removeAllItems(itemIds);
            location.reload();
        } else {
            alert('Please add something to your cart!');
        }
    }

    removeCartItem(id) {
        this.props.removeFromCart(id).then(location.reload());
    }

    render() {
        let cart_items = [];
        let cart_count = null;
        let cart_total = null;

        if (this.props.cart) {
            cart_items = Object.values(this.props.cart);
            cart_items.forEach(item => {
                cart_total += (item.price * item.quantity);
                cart_count += item.quantity;
            });
            if (cart_count === 1) {
                cart_count = (<h3 className='cart-count'>{cart_count} item in your cart</h3>)
            } else if (cart_count === 0) {
                cart_count = (<h3 className='cart-count'>Nothing in your cart</h3>)
            } else {
                cart_count = (<h3 className='cart-count'>{cart_count} items in your cart</h3>)
            }
        } else {
            cart_count = (<h3 className='cart-count'>Nothing in your cart</h3>)
        }

        return(
            <>
                <div className="nav-container">
                    <Modal />
                    <GreetingContainer />
                    <CategoryNav />
                </div>

                    <div className='cart-container'>
                        {cart_count}
                        <div className='cart-item-container'>
                            <div className='cart-item-left'>
                                {cart_items.map(item => {
                                    return (
                                        <div key={item.id} >
                                            <a href={`#/products/${item.product_id}`}>
                                                <h3>{item.title}</h3>
                                            </a>
                                            <input className={`${item.id}-quantity`} type="number" min='1' defaultValue={item.quantity} />
                                            <button onClick={() => this.removeCartItem(item.id)}>Remove item</button>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='cart-vl'></div>

                            <div className='cart-item-right'>
                            Total: ${Math.round((cart_total + 0.00001) * 100) / 100}
                                <br></br>
                                <button onClick={this.handlePay}>Pay now</button>
                            </div>
                        
                        </div>
                    </div>

                <div className="nav-container">
                    <Footer />
                </div>
            </>
        )
    }
}

export default Cart;