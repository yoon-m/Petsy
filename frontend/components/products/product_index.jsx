import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts().then(() => this.props.history.push('/products'));
    }

    render() {
        return(
            <>
                <div className="nav-container">
                    <Modal />
                    <GreetingContainer />
                    <CategoryNav />

                    <h1>Product Index</h1>
                    <ul>
                        {Object.values(this.props.products).map((product, idx) => {
                            return (
                                <div key={idx} className='product-item'>
                                    <Link to={`products/${product.id}`}>
                                        <li key={product.id}>{product.title}</li>
                                    </Link>
                                </div>
                            );
                        })}
                    </ul>

                    <Footer />
                </div>
            </>
        );
    }
}

export default ProductIndex;