import * as CartAPIUtil from '../util/cart_util';

export const CLEAR_CART = 'CLEAR_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const RECEIVE_CART = 'RECEIVE_CART';

const receiveCart = cart => {
    return {
        type: RECEIVE_CART,
        cart
    };
};

const removeItem = item => {
    return {
        type: REMOVE_ITEM,
        item
    };
};

const addItem = payload => {
    return {
        type: ADD_ITEM,
        payload
    };
};

const clearCart = () => {
    return {
        type: CLEAR_CART,
    };
};

export const fetchCart = (id) => dispatch => {
    return CartAPIUtil.fetchCart(id).then(cart => dispatch(receiveCart(cart)));
};

export const addToCart = (cartItem) => dispatch => {
    return CartAPIUtil.addItem(cartItem).then(payload => dispatch(addItem(payload)));
};

export const removeFromCart = id => dispatch => {
    return CartAPIUtil.removeItem(id).then(payload => dispatch(removeItem(payload)));
};

export const updateCart = product => dispatch => {
    return CartAPIUtil.updateItem(product).then(payload => dispatch(addItem(payload)));
};

export const removeAllItems = itemIds => dispatch => {
    return CartAPIUtil.removeAllItems(itemIds);
};