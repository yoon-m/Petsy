import { connect } from 'react-redux';
import Sell from './sell';
import { createProduct } from '../../actions/product_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mdp = dispatch => ({
    createProduct: product => dispatch(createProduct(product)),

});

export default connect(msp, mdp)(Sell);