import React from 'react';
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
        window.scrollTo(0, 0);
        this.props.fetchProducts();
    }

    render() {
        let products = null;

        if (Object.values(this.props.products).length != 0) {
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
                        </ul>

                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default ProductIndex;