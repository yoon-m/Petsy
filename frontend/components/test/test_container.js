import { connect } from 'react-redux';
import Test from './test';
import { fetchProducts } from '../../actions/product_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mdp = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    
});

export default connect(msp, mdp)(Test);