import { CLEAR_CART, ADD_ITEM, REMOVE_ITEM, RECEIVE_CART } from '../actions/cart_actions';

const cartReducer = (state = {cartItems: {}}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case CLEAR_CART:
            return {cartItems: {}};

        case RECEIVE_CART:
            return action.cart;

        case ADD_ITEM:
            if (Object.values(newState).length === 0) {
                newState.cartItems = {};
            }

            return {
                cartItems: Object.assign({}, newState.cartItems, newState.cartItems[Object.values(action.payload)[0].id] = action.payload)
            };

        case REMOVE_ITEM:
            delete newState.cartItems[Object.values(action.item)[0].id];
            return newState;

        default:
            return newState;
    }
};

export default cartReducer;