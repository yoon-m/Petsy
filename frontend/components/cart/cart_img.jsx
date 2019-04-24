import React from 'react';
import { withRouter } from 'react-router';

class CartImg extends React.Component {
    constructor(props) {
        super(props);

        this.pic = null;
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.id);
    }

    linkShow() {
        this.props.history.push(`products/${this.props.id}`);
    }

    render() {
        if (this.props.product && this.props.product.id === this.props.id) {
            if (this.props.product.photoUrls[0]) {
                this.pic = (
                    <div className='cart-img'>
                        <img src={this.props.product.photoUrls[0]} onClick={this.linkShow.bind(this)} />
                    </div>
                );
            } else {
                this.pic = (
                    <div className='cart-img'>
                        <img src={window.noImg} onClick={this.linkShow.bind(this)} />
                    </div>
                )
            }
        }

        return (
            <>
                {this.pic}
            </>
        )
    }
}

export default withRouter(CartImg);