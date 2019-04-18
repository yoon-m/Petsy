import React from 'react';
import IndexCarouselItem from './index_carousel_item';
import { withRouter } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_pos: 0,
        };
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.product.id);
    }

    prevImg() {
        let newPos = (((this.state.img_pos - 1) % 4) + 4) % 4;
        this.setState({ img_pos: newPos });
    }

    nextImg() {
        let newPos = (((this.state.img_pos + 1) % 4) + 4) % 4;
        this.setState({ img_pos: newPos });
    }

    linkToShow() {
        this.props.history.push(`/products/${this.props.product.id}`);
    }

    render() {
        let productPics = <IndexCarouselItem url={this.props.product.photoUrls[this.state.img_pos]} id={this.props.product.id}/>
        let price = (this.props.product.price).toFixed(2);

        // RATING STARS
        let productAVGRating = 0;
        let productTOTRating = 0;

        if (this.props.reviews.length == 0) {
            // debugger
            // document.getElementById(`${this.props.product.id}a`).style.color = gold;
        } else {
            this.props.reviews.forEach(review => {
                productTOTRating += review.rating;
            });

            productAVGRating = Math.round(productTOTRating / this.props.reviews.length);


        }

        return(
            <>
                <div className='index-item-container' >
                    <span onClick={this.prevImg.bind(this)} className='ici-arrow ici-left'>{'<'}</span>
                    {productPics}
                    <span onClick={this.nextImg.bind(this)} className='ici-arrow ici-right'>{'>'}</span>
                    
                    <div className='index-item-text' onClick={this.linkToShow.bind(this)}>
                        <h3>{this.props.product.title}</h3>
                        <p>${price}</p>
                        <span><i className="fas fa-star" id={`${this.props.product.id}a`}></i></span>
                        <span><i className="fas fa-star" id={`${this.props.product.id}b`}></i></span>
                        <span><i className="fas fa-star" id={`${this.props.product.id}c`}></i></span>
                        <span><i className="fas fa-star" id={`${this.props.product.id}d`}></i></span>
                        <span><i className="fas fa-star" id={`${this.props.product.id}e`}></i></span>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ProductIndexItem);