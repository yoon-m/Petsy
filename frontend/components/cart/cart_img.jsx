import React from 'react';

class CartImg extends React.Component {
    componentDidMount() {
        this.props.fetchProduct(this.props.id);
    }

    render() {
        return (
            <>

            </>
        )
    }
}

export default CartImg;