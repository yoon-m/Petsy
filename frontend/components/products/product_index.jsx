import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts().then(() => this.props.history.push('/products'));
    }

    render() {
        let products = null;

        if (this.props.products) {
            products = Object.values(this.props.products).map(product => {
                return (<ProductIndexItem product={product} key={product.id} />);
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
                            {/* {Object.values(this.props.products).map((product, idx) => {
                                return (
                                    <div key={idx} className='product-item'>
                                        
                                        <Link to={`products/${product.id}`}>
                                            <li key={product.id}>{product.title}</li>
                                        </Link>
                                    </div>
                                );
                            })} */}
                            
                        </ul>

                    </div>

                    <Footer />
                </div>
            </>
        );
    }
}

export default ProductIndex;