import { CLEAR_CART, ADD_ITEM, REMOVE_ITEM, RECEIVE_CART } from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        // case CLEAR_CART:
        //     return {};

        case RECEIVE_CART:
            return action.cart;

        // case ADD_ITEM:

        case REMOVE_ITEM:
            debugger
            

        default:
            return newState;
    }
};

export default cartReducer;