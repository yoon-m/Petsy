import * as ProductAPIUtil from '../util/product_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';

export const receiveProducts = products => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    };
};

export const receiveProduct = product => {
    return {
        type: RECEIVE_PRODUCT,
        product      
    };
};

export const receiveErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
});

export const fetchProducts = () => dispatch => {
    return ProductAPIUtil.fetchAllProducts().then(products => dispatch(receiveProducts(products)));
};

export const fetchProduct = id => dispatch => {
    return ProductAPIUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)));
};

export const createProduct = product => dispatch => {
    return ProductAPIUtil.createProduct(product).then(product => dispatch(receiveProduct(product)))
        .fail(err => dispatch(receiveErrors(err.responseJSON)));
};