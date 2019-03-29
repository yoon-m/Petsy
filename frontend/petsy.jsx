import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TEST!!!!!!!!!!!!!!!!!!!!!!
    import * as ProductApiUtil from './util/product_util';
// TEST!!!!!!!!!!!!!!!!!!!!!!

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TEST!!!!!!!!!!!!!!!!!!!
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchProducts = ProductApiUtil.fetchAllProducts;
    // TEST!!!!!!!!!!!!!!!!!!!

    ReactDOM.render(<Root store={ store }/>, document.getElementById('root'))
});