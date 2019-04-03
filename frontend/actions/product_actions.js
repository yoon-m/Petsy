import * as ProductAPIUtil from '../util/product_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

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

export const fetchProducts = () => dispatch => {
    return ProductAPIUtil.fetchAllProducts().then(products => dispatch(receiveProducts(products)));
};

export const fetchProduct = id => dispatch => {
    return ProductAPIUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)));
};

export const createProduct = product => dispatch => {
    return ProductAPIUtil.createProduct(product).then(product => dispatch(receiveProduct(product)));
}