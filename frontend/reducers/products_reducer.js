import merge from 'lodash/merge';
import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;

        case RECEIVE_PRODUCT:
            return action.product;
        
        case REMOVE_PRODUCT:
            delete newState[Object.values(action.product)[0].id];
            return newState;

        default:
            return newState;
    }
};

export default productsReducer;