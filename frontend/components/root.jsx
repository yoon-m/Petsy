import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import App from './App';
import ProductIndexContainer from './products/product_index_container';
import ProductItemContainer from './products/product_item_container';
import CartContainer from './cart/cart_container';
import SellContainer from './sell/sell_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/products/:productId' exact component={ProductItemContainer} />
                <Route path='/' exact component={App} />
                <Route path='/products/' exact component={ProductIndexContainer}/>
                <Route path='/cart' exact component={CartContainer}/>
                <Route path='/sell' exact component={SellContainer} />
            </Switch>
        </HashRouter>
    </Provider>
);

export default Root;