import React from 'react';

class CartItem extends React.Component {
    componentDidMount() {
        this.props.fetchProduct(this.props.id);
    }

    render() {
        let title = null;

        if (this.props.product) {
            title = this.props.product.title;
        }

        return (
            <>
                <h4>{title}</h4>
            </>
        )
    }
}

export default CartItem;