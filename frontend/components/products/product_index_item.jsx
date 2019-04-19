import React from 'react';
import { withRouter } from 'react-router-dom';
import IndexCarouselItem from './index_carousel_item';
import ReviewStars from '../../components/review_stars/review_stars';

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
        let testing = null;
        if (this.props.reviews.length != 0) {
            testing = (
                <ReviewStars reviews={this.props.reviews} id={this.props.reviews.product_id} />

            );
        }

        // debugger
        return(
            <>
                <div className='index-item-container' >
                    <span onClick={this.prevImg.bind(this)} className='ici-arrow ici-left'>{'<'}</span>
                    {productPics}
                    <span onClick={this.nextImg.bind(this)} className='ici-arrow ici-right'>{'>'}</span>
                    
                    <div className='index-item-text' onClick={this.linkToShow.bind(this)}>
                        <h3>{this.props.product.title}</h3>
                        <p>${price}</p>
                        {testing}
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ProductIndexItem);