import { RECEIVE_SEARCH_RESULTS } from '../actions/product_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.searchResults;

        default:
            return newState;
    }
};

export default searchReducer;