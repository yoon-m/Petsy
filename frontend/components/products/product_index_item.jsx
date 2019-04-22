import React from 'react';
import { withRouter } from 'react-router-dom';
import IndexCarouselItem from './index_carousel_item';
import ReviewStarsContainer from '../../components/review_stars/review_stars_container';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_pos: 0,
        };
    }

    prevImg() {
        let numPics = this.props.product.photoUrls.length;
        let newPos = (((this.state.img_pos - 1) % numPics) + numPics) % numPics;
        this.setState({ img_pos: newPos });
    }

    nextImg() {
        let numPics = this.props.product.photoUrls.length;
        let newPos = (((this.state.img_pos + 1) % numPics) + numPics) % numPics;
        this.setState({ img_pos: newPos });
    }

    linkToShow() {
        this.props.history.push(`/products/${this.props.product.id}`);
    }

    render() {
        let productPics = <IndexCarouselItem url={this.props.product.photoUrls[this.state.img_pos]} id={this.props.product.id}/>
        let price = (this.props.product.price).toFixed(2);

        return(
            <>
                <div className='index-item-container' >
                    <span onClick={this.prevImg.bind(this)} className='ici-arrow ici-left'>{'<'}</span>
                    {productPics}
                    <span onClick={this.nextImg.bind(this)} className='ici-arrow ici-right'>{'>'}</span>
                    
                    <div className='index-item-text' onClick={this.linkToShow.bind(this)}>
                        <h3>{this.props.product.title}</h3>
                        <p>${price}</p>
                        <ReviewStarsContainer productId={this.props.product.id} />
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ProductIndexItem);