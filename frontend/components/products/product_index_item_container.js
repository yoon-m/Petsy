import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ProductIndexItem from './product_index_item';

const msp = state => {
    return {
        reviews: Object.values(state.entities.reviews),
    };
};

const mdp = dispatch => ({
    fetchReviews: productId => dispatch(fetchReviews(productId)),
});

export default connect(msp, mdp)(ProductIndexItem);