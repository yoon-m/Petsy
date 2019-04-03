import * as CartAPIUtil from '../util/cart_util';

export const CLEAR_CART = 'CLEAR_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const RECEIVE_CART = 'RECEIVE_CART';

export const receiveItem = item => {
    return {
        type: ADD_ITEM,
        item
    };
};

const receiveCart = cart => {
    return {
        type: RECEIVE_CART,
        cart
    };
};

// export const removeItem = item => {
//     return {
//         type: REMOVE_ITEM,
//         item
//     };
// };

// export const deleteCart = () => {
//     return {
//         type: CLEAR_CART,
//     };
// };

export const fetchCart = (id) => dispatch => {
    return CartAPIUtil.fetchCart(id).then(cart => dispatch(receiveCart(cart)));
};