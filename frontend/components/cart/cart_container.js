import { connect } from 'react-redux';
import Cart from './cart';
import { fetchCart, removeFromCart, updateCart, removeAllItems } from '../../actions/cart_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        cart: state.entities.cart.cartItems,
    };
};

const mdp = dispatch => ({
    fetchCart: id => dispatch(fetchCart(id)),
    removeFromCart: id => dispatch(removeFromCart(id)),
    updateCart: product => dispatch(updateCart(product)),
    removeAllItems: itemIds => dispatch(removeAllItems(itemIds)),
});

export default connect(msp, mdp)(Cart);