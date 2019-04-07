import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import products from './product_errors_reducer';

export default combineReducers({
    session,
    products,
    
});