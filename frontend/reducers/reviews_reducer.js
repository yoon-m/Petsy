import { REMOVE_REVIEW, RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;

        case RECEIVE_REVIEW:
            let review = Object.values(action.review)[0];
            return Object.assign({}, newState, newState[review.id] = review);

        case REMOVE_REVIEW:

        default:
            return newState;
    }
};

export default reviewsReducer;