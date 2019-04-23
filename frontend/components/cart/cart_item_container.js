import { connect } from 'react-redux';
import CartItem from './cart_item';
import { fetchProduct } from '../../actions/product_actions';

const msp = (state) => {
    return {
        product: Object.values(state.entities.products)[0]
    };
};

const mdp = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),

});

export default connect(msp, mdp)(CartItem);