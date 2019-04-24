import React from 'react';
import swal from '@sweetalert/with-react';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import CartImgContainer from '../cart/cart_img_container';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.handlePay = this.handlePay.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchCart(this.props.currentUser.id);
    }

    handlePay(e) {
        if (this.props.cart) {
            e.preventDefault();
            swal(
                <h1>Thanks for testing my website!</h1>,
                {
                    icon: "success",
                })
            let itemIds = [];
            
            Object.values(this.props.cart).map(item => {
                itemIds.push(item.id);
            });

            this.props.removeAllItems(itemIds);
            this.props.history.push('/');
        } else {
            swal(
                <h1>Please add something to your cart!</h1>,
                {
                    icon: "error",
                })
        }
    }

    removeCartItem(id) {
        this.props.removeFromCart(id).then(location.reload());
    }

    updateQuantity(cartItem_id, quantity, product_id) {
        let item = {
            user_id: this.props.currentUser.id,
            quantity,
            product_id
        }

        this.props.removeFromCart(cartItem_id).then(() => {
            this.props.addToCart(item)
        }).then(() => location.reload())
    }

    render() {
        let cart_items = [];
        let cart_count = null;
        let cart_total = null;
        let items = null;
        let cartRight = (
            <div className='c-empty'>
                <h2>Your cart is empty.</h2>
                <a href="/#/products">Discover something unique to fill it up</a>
            </div>
        );


        if (this.props.cart) {
            cart_items = Object.values(this.props.cart);
            cart_items.forEach(item => {
                cart_total += (item.price * item.quantity);
                cart_count += item.quantity;
            });

            if (cart_count) {
                cartRight = (
                    <div className='cart-item-right'>
                        
                        Total: ${Math.round((cart_total + 0.00001) * 100) / 100}
                        <br></br>
                        Shipping: Free!
                        <br/>
                        <hr/>
                        <button onClick={this.handlePay}>Proceed to checkout</button>
                    </div>
                )
            }

            items = (
                <div className='cart-item-left'>
                    {cart_items.map((item, idx) => {
                        return (
                            <div className='ci-main'>
                                <div className='ci' key={item.id}>
                                    <a href={`#/products/${item.product_id}`}>
                                        <h3>{item.title}</h3>
                                    </a>

                                    <CartImgContainer id={item.product_id} key={idx}/>

                                    <button onClick={() => this.removeCartItem(item.id)}>Remove item</button><br />
                                    <p>Subtotal: {item.quantity} x ${item.price} each = ${(item.quantity * item.price).toFixed(2)}</p>
                                </div>

                                <div className='ci-right'>
                                    <input
                                        id={`${item.id}-quantity`}
                                        type="number"
                                        min='1'
                                        defaultValue={item.quantity}
                                        step='1'
                                    />
                                    <button onClick={() => this.updateQuantity(item.id, document.getElementById(`${item.id}-quantity`).value, item.product_id)}>Update Quantity</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );

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
                            {items}                

                            <div className='cart-vl'></div>

                            {/* <div className='cart-item-right'>
                            Total: ${Math.round((cart_total + 0.00001) * 100) / 100}
                                <br></br>
                                <button onClick={this.handlePay}>Pay now</button>
                            </div> */}
                            {cartRight}
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