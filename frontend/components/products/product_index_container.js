import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';

const msp = state => {
    return {
        // might need currentUser to see their products, their search history, etc.
        currentUser: state.entities.users[state.session.id],
        products: state.entities.products,
    };
};

const mdp = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: id => dispatch(fetchProduct(id)),
    
});

export default connect(msp, mdp)(ProductIndex);