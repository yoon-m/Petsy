import { CLEAR_CART, ADD_ITEM, REMOVE_ITEM, RECEIVE_CART } from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case CLEAR_CART:
            return {cartItems: {}};

        case RECEIVE_CART:
            return action.cart;

        case ADD_ITEM:
            debugger
            return {
                cartItems: Object.assign({}, state.cartItems, state.cartItems[Object.values(action.payload)[0].id] = action.payload)
            };

        case REMOVE_ITEM:
            delete newState.cartItems[Object.values(action.item)[0].id];
            return newState;

        default:
            return newState;
    }
};

export default cartReducer;