import React from 'react';
import IndexCarouselItem from './index_carousel_item';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_pos: 0,
        };
    }

    prevImg() {
        let newPos = (((this.state.img_pos - 1) % 4) + 4) % 4;
        this.setState({ img_pos: newPos });
    }

    nextImg() {
        let newPos = (((this.state.img_pos + 1) % 4) + 4) % 4;
        this.setState({ img_pos: newPos });
    }

    render() {
        let productPics = <IndexCarouselItem url={this.props.product.photoUrls[this.state.img_pos]} />

        return(
            <>
                <div className='index-item-container'>
                    <span onClick={this.prevImg.bind(this)} className='ici-arrow ici-left'>{'<'}</span>
                    {productPics}
                    <span onClick={this.nextImg.bind(this)} className='ici-arrow ici-right'>{'>'}</span>
                    <h3>{this.props.product.title}</h3>
                </div>
            </>
        )
    }
}

export default ProductIndexItem;