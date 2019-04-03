import { connect } from 'react-redux';
import ProductItem from './product_item';
import { fetchProduct, fetchProducts } from '../../actions/product_actions';

const msp = (state, ownProps) => {
    return {
        // might need currentUser to see their products, their search history, etc.
        currentUser: state.entities.users[state.session.id],
        product: state.entities.products[ownProps.match.params.productId],
    };
};

const mdp = dispatch => ({
    fetchProduct: id => dispatch(fetchProduct(id)),
    fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(msp, mdp)(ProductItem);