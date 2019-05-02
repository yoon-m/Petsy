import { connect } from 'react-redux';
import ProfileReviews from './profile_reviews';
import { deleteReview, updateReview } from '../../actions/review_actions';

const mdp = dispatch => ({
    deleteReview: id => dispatch(deleteReview(id)),
    updateReview: review => dispatch(updateReview(review)),
});

export default connect(null, mdp)(ProfileReviews);