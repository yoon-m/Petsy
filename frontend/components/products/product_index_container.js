import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        products: state.entities.products,
    };
};

const mdp = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(msp, mdp)(ProductIndex);