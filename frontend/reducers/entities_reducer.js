import { combineReducers } from 'redux';
import users from './users_reducer';
import products from './products_reducer';
import cart from './cart_reducer';
import reviews from './reviews_reducer';

export default combineReducers({
    users,
    products,
    cart,
    reviews,
    
});