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

// Find current user's listings/reviews
    // OPTION 1: receive all products
        // find the ones that belong to the current user?

    // OPTION 2: make custom route
        // get all products that belong to the current user with one AJAX request

// Edit current users' listings/reviews
    // have a listings edit form and a reviews edit form
        // maybe make them modals
    // listings/reviews should link to the respective show page (EASY)