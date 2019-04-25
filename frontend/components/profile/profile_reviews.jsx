import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileReviews extends React.Component {
    linkShow(id) {
        this.props.history.push(`/products/${id}`);
    }

    render() {
        let reviewedTitle = null;

        if (this.props.myReviews[1]) {
            reviewedTitle = (
                this.props.myReviews.map(review => {
                    return (
                        <div className='profile-review-item' onClick={() => this.linkShow.bind(this)(review.product_id)}>
                                <img src={this.props.reviewedProducts[review.product_id].photoUrls[0]} />
                                <div className='profile-review-item-top'>
                                <h4>{review.title}</h4>
                                <div className="profile-star-ratings-css">
                                    <div className="profile-star-ratings-css-top" style={{ width: `${(review.rating / 5) * 100}%` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                    <div className="profile-star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                </div>

                                <div className='profile-review-text'>
                                    <a href="/#/soon">Edit Review</a><br />
                                    <a href="/#/soon">Remove Review</a>
                                </div>
                            </div>
                        </div>
                    );
                })
            );
        }

        return (
            <>
                <h2 className='profile-reviews-title'>Your reviews:</h2>
                <div className='profile-reviews-container'>
                    {reviewedTitle}
                </div>
            </>
        );
    }
}

export default withRouter(ProfileReviews);