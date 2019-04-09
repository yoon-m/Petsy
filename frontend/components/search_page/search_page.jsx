import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';

class SearchPage extends React.Component {
    
    componentDidMount() {
        this.props.searchProducts(this.props.location.pathname.slice(8,this.props.location.pathname.length));
    }

    render() {
        let results = null;
        
        if (this.props.searchResults) {
            results = this.props.searchResults.map(result => {
                return (
                    <a key={result.id} href={`/#/products/${result.id}`}><p>{result.title}</p></a>
                )
            })
        }

        return(
            <div className="nav-container">
                <GreetingContainer />
                <CategoryNav />

                <h2>SEARCH PAGE!</h2>

                <h3>SEARCH RESULTS:</h3>
                <div>
                    {results}
                </div>

                <Footer />
            </div>
        );
    }
}

export default SearchPage;