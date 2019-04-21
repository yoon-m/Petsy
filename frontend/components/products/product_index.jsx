import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import ProductIndexItemContainer from './product_index_item_container';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchProducts();
    }

    componentDidUpdate() {
        debugger
    }

    render() {
        debugger
        let products = null;

        if (Object.values(this.props.products).length != 0) {
            debugger
            products = Object.values(this.props.products).map(product => {
                return (<ProductIndexItemContainer product={product} key={product.id} />);
            });
        }

        return(
            <>
                <div className="nav-container">
                    <Modal />
                    <GreetingContainer />
                    <CategoryNav />

                    <h1>All Products</h1>
                    <div className='product-index-container'>
                        
                        <ul>
                            {products}
                        </ul>

                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default ProductIndex;