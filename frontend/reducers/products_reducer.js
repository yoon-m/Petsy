import merge from 'lodash/merge';
import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, state[Object.keys(action.product)[0]] = action.product);
        default:
            return newState;
    }
};

export default productsReducer;