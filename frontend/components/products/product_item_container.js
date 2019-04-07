import { connect } from 'react-redux';
import ProductItem from './product_item';
import { fetchProduct } from '../../actions/product_actions';
import { fetchCart, addToCart } from '../../actions/cart_actions';
import { fetchReviews, createReview } from '../../actions/review_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        product: state.entities.products[ownProps.match.params.productId],
        reviews: Object.values(state.entities.reviews),
    };
};

const mdp = dispatch => ({
    fetchProduct: id => dispatch(fetchProduct(id)),
    addToCart: (cartItem, quantity) => dispatch(addToCart(cartItem, quantity)),
    fetchCart: id => dispatch(fetchCart(id)),
    fetchReviews: productId => dispatch(fetchReviews(productId)),
    createReview: review => dispatch(createReview(review)),
});

export default connect(msp, mdp)(ProductItem);