import { connect } from 'react-redux';
import Cart from './cart';
import { fetchCart } from '../../actions/cart_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        cart_items: state.entities.cart.cartItems,
    };
};

const mdp = dispatch => ({
    fetchCart: id => dispatch(fetchCart(id)),
});

export default connect(msp, mdp)(Cart);