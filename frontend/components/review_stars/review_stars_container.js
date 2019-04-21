import { connect } from 'react-redux';
import ReviewStars from './review_stars';
import { fetchReviews } from '../../actions/review_actions';

const msp = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews),
    };
};

const mdp = dispatch => ({
    fetchReviews: productId => dispatch(fetchReviews(productId)),
});

export default connect(msp, mdp)(ReviewStars);