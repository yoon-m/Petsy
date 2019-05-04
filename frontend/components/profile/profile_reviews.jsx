import React from 'react';
import { withRouter } from 'react-router-dom';
import swal from '@sweetalert/with-react';

class ProfileReviews extends React.Component {
    linkShow(id) {
        this.props.history.push(`/products/${id}`);
        this.removeReview = this.removeReview.bind(this);
        this.submitReview = this.submitReview.bind(this);
        this.editingId = null;
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

    submitReview() {
        // e.preventDefault();
        let rating;

        if (document.getElementById('1-star-edit').checked === true) {
            rating = 1;
        } else if (document.getElementById('2-stars-edit').checked === true) {
            rating = 2;
        } else if (document.getElementById('3-stars-edit').checked === true) {
            rating = 3;
        } else if (document.getElementById('4-stars-edit').checked === true) {
            rating = 4;
        } else if (document.getElementById('5-stars-edit').checked === true) {
            rating = 5;
        }

        let title = document.getElementById('edit-title').value;
        let body = document.getElementById('edit-body').value;

        this.props.updateReview({ title, body, rating, id: this.editingId })
            .then(() => {
                document.getElementById('edit-review-modal').style.display = 'none';
                document.getElementById('edit-review-modal-bg').style.display = 'none';
            })
            .then(() => {
                swal(
                    <h1>You successfully edited your review!</h1>,
                    {
                        icon: "success",
                    })
            });
    }

    editReview(review) {
        window.scrollTo(0,0);
        document.getElementById('edit-review-modal').style.display = 'block';
        document.getElementById('edit-review-modal-bg').style.display = 'block';
        document.getElementById('edit-title').value = review.title;
        document.getElementById('edit-body').value = review.body;

        this.editingId = review.id;

        if (review.rating === 1) {
            document.getElementById('1-star-edit').checked = true;
        } else if (review.rating === 2) {
            document.getElementById('2-stars-edit').checked = true;
        } else if (review.rating === 3) {
            document.getElementById('3-stars-edit').checked = true;
        } else if (review.rating === 4) {
            document.getElementById('4-stars-edit').checked = true;
        } else if (review.rating === 5) {
            document.getElementById('5-stars-edit').checked = true;
        }
    }

    cancelEdit(e) {
        document.getElementById('edit-review-modal').style.display = 'none';
        document.getElementById('edit-review-modal-bg').style.display = 'none';
    }

    ratingClick() {
        $("input[name='rating']:checked");
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
                                    {/* <a href='/#/soon'>Edit Review</a><br /> */}
                                    <a onClick={() => this.editReview.bind(this)(review)}>Edit Review</a><br />
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

                <div id='edit-review-modal-bg'></div>
                <div id='edit-review-modal'>
                    <h1>Edit your review</h1>
                    <div className="star-edit">
                        <input type="radio" id="5-stars-edit" name="rating" value="5" onClick={this.ratingClick} required defaultChecked />
                        <label htmlFor="5-stars-edit" className="e-star">&#9733;</label>
                        <input type="radio" id="4-stars-edit" name="rating" value="4" onClick={this.ratingClick} />
                        <label htmlFor="4-stars-edit" className="e-star">&#9733;</label>
                        <input type="radio" id="3-stars-edit" name="rating" value="3" onClick={this.ratingClick} />
                        <label htmlFor="3-stars-edit" className="e-star">&#9733;</label>
                        <input type="radio" id="2-stars-edit" name="rating" value="2" onClick={this.ratingClick} />
                        <label htmlFor="2-stars-edit" className="e-star">&#9733;</label>
                        <input type="radio" id="1-star-edit" name="rating" value="1" onClick={this.ratingClick} />
                        <label htmlFor="1-star-edit" className="e-star">&#9733;</label>
                    </div>

                    <form>
                        <span className='edit-titles'>Title:</span><input type="text" id='edit-title' required/><br/>
                        <span className='edit-titles'>Body:</span><textarea cols="30" rows="10" id='edit-body' required></textarea><br/>
                    
                        <button className='edit-btns' onClick={() => this.cancelEdit.bind(this)()}>Cancel</button>
                        <input className='edit-btns' type="submit" onClick={() => this.submitReview()} value='Submit'/>
                    </form>

                    
                </div>
            </>
        );
    }
}

export default withRouter(ProfileReviews);