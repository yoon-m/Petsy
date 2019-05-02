import React from 'react';
import { withRouter } from 'react-router-dom';
import swal from '@sweetalert/with-react';

class ProfileReviews extends React.Component {
    linkShow(id) {
        this.props.history.push(`/products/${id}`);
        this.removeReview = this.removeReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
    }

    removeReview(id) {
        swal({
            icon: "warning",
            text: "Are you sure you want to remove this review?",
            buttons: {
                cancel: "Cancel",
                yes: {
                    text: "Yes",
                    value: "remove",
                },
            },
        })
        .then(function(value) {
            switch (value) {
                case "remove":
                    this.props.deleteReview(id);
            }
        }.bind(this));
    }

    updateReview() {
        
    }

    render() {
        let reviewedTitle = null;
        let products = this.props.reviewedProducts;
        let reviews = this.props.myReviews;
        

        if (reviews[1]) {
            reviewedTitle = (
                reviews.map(function(review) {
                    let pic = null;
                    if (products[review.product_id]) {
                        pic = <img src={products[review.product_id].photoUrls[0]} onClick={() => this.linkShow.bind(this)(review.product_id)} />
                    }
                    return (
                        <div className='profile-review-item' key={review.id}>
                            {pic}
                            
                            <div className='profile-review-item-top'>
                                <h4>{review.title}</h4>
                                <div className="profile-star-ratings-css">
                                    <div className="profile-star-ratings-css-top" style={{ width: `${(review.rating / 5) * 100}%` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                    <div className="profile-star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                </div>

                                <div className='profile-review-text'>
                                    {/* <a onClick={() => this.updateReview(review)}>Edit Review</a><br /> */}
                                    <a href='/#/soon'>Edit Review</a><br />
                                    <a onClick={() => this.removeReview(review.id)}>Remove Review</a>
                                </div>
                            </div>
                        </div>
                    );
                }, this)
            );
        }

        return (
            <>
                <h2 className='profile-reviews-title'>Your reviews:</h2>
                <div className='profile-reviews-container'>
                    {reviewedTitle}
                </div>

                <div className='edit-review-modal-bg'></div>
                <div className='edit-review-modal'>
                    
                </div>
            </>
        );
    }
}

export default withRouter(ProfileReviews);