import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import ProfileProducts from './profile_products';
import ProfileReviews from './profile_reviews';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchReviews();
    }

    render() {
        let products = [];
        let reviews = [];
        let reviewIds = [];
        let reviewedProducts = {};

        if (this.props.products) {
            Object.values(this.props.products).forEach(product => {
                if (this.props.currentUser.id === product.owner_id) {
                    products.push(product);
                }
            });
        }

        if (this.props.reviews) {
            Object.values(this.props.reviews).forEach(review => {
                if (this.props.currentUser.id === review.author_id) {
                    reviews.push(review);
                    reviewIds.push(review.id);
                }
            });

            Object.values(this.props.products).forEach(product => {
                if (reviewIds.includes(product.id)) {
                    reviewedProducts[product.id] = product;
                }
            });
        }

        return (
            <>
                <div className="nav-container">
                    <GreetingContainer />
                    <CategoryNav />
                    <Modal />
                    
                    <h1>Welcome, {this.props.currentUser.first_name}</h1>
                    
                    <ProfileProducts myProducts={products} />
                    <ProfileReviews myReviews={reviews} reviewedProducts={reviewedProducts} />

                    <Footer />
                </div>
            </>
        );
    }
}

export default Profile;