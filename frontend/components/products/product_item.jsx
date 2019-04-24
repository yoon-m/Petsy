import React from 'react';
import swal from '@sweetalert/with-react';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import CarouselItem from './carousel_item';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            rating: 5,
            product_id: 0,
            img_pos: 0,
        };
        this.addToCart = this.addToCart.bind(this);
        this.buyNow = this.buyNow.bind(this);
        this.createReview = this.createReview.bind(this);
        this.ratingClick = this.ratingClick.bind(this);
        this.prevImg = this.prevImg.bind(this);
        this.nextImg = this.nextImg.bind(this);
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchProduct(this.props.match.params.productId)
            .then(this.props.fetchReviews(this.props.match.params.productId));
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId)
                .then(this.props.fetchReviews(this.props.match.params.productId));
        }
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    addToCart(e) {
        e.preventDefault();
        let quantity = document.getElementById('quantity').value;
        let item = {
            user_id: this.props.currentUser.id,
            product_id: this.props.product.id,
            quantity: quantity
        };
        this.props.fetchCart(this.props.currentUser.id);
        this.props.addToCart(item).then(this.props.history.push('/cart'));
    }

    buyNow(e) {
        e.preventDefault();
        swal(
            <h1>Thanks for testing my website!</h1>,
            {
                icon: "success",
            }).then(() => document.location.href = "/");
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value, product_id: this.props.product.id });
        };
    }

    ratingClick(e) {
        this.setState({ rating: $("input[name='rating']:checked").val() });
    }

    createReview(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.createReview(this.state).then(setTimeout(location.reload(), 2000));
        } else {
            this.props.history.push('/');
        }
    }

    prevImg() {
        let numPics = this.props.product.photoUrls.length;
        let newPos = (((this.state.img_pos - 1) % numPics) + numPics) % numPics;
        this.setState({ img_pos: newPos });
    }

    nextImg() {
        let numPics = this.props.product.photoUrls.length;
        let newPos = (((this.state.img_pos - 1) % numPics) + numPics) % numPics;
        this.setState({ img_pos: newPos });
    }

    render() {
        let productDescription = null;
        let productOwner = null;
        let productPrice = null;
        let productTitle = null;
        let productRating = 0;
        let productReviews = null;
        let productPics = null;
        let ratingStars = (
            <div className='rating-stars'>
                <i className="fas fa-star rs1"></i>
                <i className="fas fa-star rs2"></i>
                <i className="fas fa-star rs3"></i>
                <i className="fas fa-star rs4"></i>
                <i className="fas fa-star rs5"></i>
            </div>
        );

        if (this.props.product) {
            productDescription = this.props.product.description;
            productOwner = this.props.product.first_name;
            productPrice = (this.props.product.price).toFixed(2);
            
            this.props.reviews.forEach(review => {
                productRating += review.rating
            });

            productRating /= this.props.reviews.length;
            
            productReviews = this.props.reviews.map(review => {
                debugger
                return (
                    <div key={review.id} className='review-post'>
                        <h4>{review.first_name} - {review.title}</h4>
                        <div className="star-ratings-css">
                            <div className="star-ratings-css-top" style={{ width: `${(review.rating / 5) * 100}%` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                            <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        </div>
                        <p>{review.body}</p>
                    </div>
                );
            });
            
            productTitle = this.props.product.title.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');;
            

            productPics = <CarouselItem url={this.props.product.photoUrls[this.state.img_pos]} />

            $('.rs1').css('color', 'grey')
            $('.rs2').css('color', 'grey')
            $('.rs3').css('color', 'grey')
            $('.rs4').css('color', 'grey')
            $('.rs5').css('color', 'grey')
            
            if (Math.round(productRating) === 1) {
                $('.rs1').css('color', 'gold')
            } else if (Math.round(productRating) === 2) {
                $('.rs1').css('color', 'gold')
                $('.rs2').css('color', 'gold')
            } else if (Math.round(productRating) === 3) {
                $('.rs1').css('color', 'gold')
                $('.rs2').css('color', 'gold')
                $('.rs3').css('color', 'gold')
            } else if (Math.round(productRating) === 4) {
                $('.rs1').css('color', 'gold')
                $('.rs2').css('color', 'gold')
                $('.rs3').css('color', 'gold')
                $('.rs4').css('color', 'gold')
            } else if (Math.round(productRating) === 5 || !productRating) {
                $('.rs1').css('color', 'gold')
                $('.rs2').css('color', 'gold')
                $('.rs3').css('color', 'gold')
                $('.rs4').css('color', 'gold')
                $('.rs5').css('color', 'gold')
            }
        }
        
        let errors = this.props.errors.map((error, idx) => {
            if (error === 'Product has already been taken') {
                return <li key={idx} className='product-errors'>{"You've already reviewed this item."}</li>
            } else if (!error.includes('exist')) {
                return <li key={idx} className='product-errors'>{error}</li>
            }
        })

        return (
            <>
                <div className="nav-container">
                    <Modal />
                    <GreetingContainer />
                    <CategoryNav />
                    
                    <div className='show-container'>
                        <div className='ci-container'>
                            <span className='ci-left ci-arrow' onClick={this.prevImg}>{'<'}</span>
                                {productPics}
                            <span className='ci-right ci-arrow' onClick={this.nextImg}>{'>'}</span>
                        </div>

                        <div className='show-right'>
                            <h4 className='product-owner'><a href="/#/soon">{productOwner}</a></h4>{ratingStars}
                            <p className='product-title'>{productTitle}</p>
                            <p className='product-price'>${productPrice}</p>
                            <p>Free shipping</p>

                            <button onClick={this.buyNow} className='buy-now-btn'>Buy it now</button>
                            <input id='quantity' type="number" min='1' defaultValue='1' step='1' />
                            <button onClick={this.addToCart} className='add-cart-btn'>Add to cart</button>

                            <hr>
                            </hr>
                        </div>
                    </div>
                    
                    <hr>
                    </hr>

                    <div className='description-container'>
                        <h3>Description</h3>
                        <p>{productDescription}</p>
                    </div>

                    <hr></hr>
                    
                    <div className='review-form-container'>
                        <div className='review-left'>
                            <h3>Reviews</h3>
                            {productReviews}
                        </div>

                        <div className='review-right'>
                            <h3>Submit a review</h3>
                            {errors}
                            <form onSubmit={this.createReview}>
                                Rating:<div className = "star-rating">
                                    <input type="radio" id="5-stars" name="rating" value="5" onClick={this.ratingClick} required defaultChecked/>
                                    <label htmlFor="5-stars" className="star">&#9733;</label>
                                    <input type="radio" id="4-stars" name="rating" value="4" onClick={this.ratingClick} />
                                    <label htmlFor="4-stars" className="star">&#9733;</label>
                                    <input type="radio" id="3-stars" name="rating" value="3" onClick={this.ratingClick} />
                                    <label htmlFor="3-stars" className="star">&#9733;</label>
                                    <input type="radio" id="2-stars" name="rating" value="2" onClick={this.ratingClick} />
                                    <label htmlFor="2-stars" className="star">&#9733;</label>
                                    <input type="radio" id="1-star" name="rating" value="1" onClick={this.ratingClick} />
                                    <label htmlFor="1-star" className="star">&#9733;</label>
                                </div>
                                
                                <label className='review-title'>Title: </label>
                                <input type="text" onChange={this.handleChange('title')} required/>
                                <textarea cols="55" rows="10" 
                                    onChange = {this.handleChange('body')} 
                                    placeholder='Please leave a review (maximum 300 characters)' 
                                    required 
                                >
                                </textarea>
                                <input type="submit" value='Submit review' />
                            </form>
                        </div>
                    </div>

                    <Footer />
                </div>
            </>
        );
    }
}

export default ProductItem;