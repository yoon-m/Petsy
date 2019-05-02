import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProducts } from '../../actions/product_actions';
import { fetchReviews } from '../../actions/review_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        products: state.entities.products,
        reviews: state.entities.reviews,
    };
};

const mdp = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchReviews: () => dispatch(fetchReviews()),
});

export default connect(msp, mdp)(Profile);