import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import ProductIndexItem from '../../components/products/product_index_item';

class SearchPage extends React.Component {
    
    componentDidMount() {
        this.props.searchProducts(this.props.location.pathname.slice(8,this.props.location.pathname.length));
    }

    render() {
        let results = null;
        
        if (this.props.searchResults) {
            results = this.props.searchResults.map(result => {
                // return (
                //     <a key={result.id} href={`/#/products/${result.id}`}><p>{result.title}</p></a>
                // )
                return (<ProductIndexItem product={result} key={result.id} />);
            });
        }

        return(
            <div className="nav-container">
                <GreetingContainer />
                <CategoryNav />
                <Modal />

                <h1>Search Products</h1>
                
                <div className='search-index-container'>
                    {results}
                </div>

                <Footer />
            </div>
        );
    }
}

export default SearchPage;