import React from 'react';

class CartItem extends React.Component {
    render() {
        return(
            <h3>{this.props.item.title}</h3>
        );
    }
}

export default CartItem;