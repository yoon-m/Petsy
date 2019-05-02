import React from 'react';
import { withRouter } from 'react-router-dom';
import swal from '@sweetalert/with-react';

class ProfileProducts extends React.Component {
    linkShow(id) {
        this.props.history.push(`/products/${id}`);
    }
    
    removeListing(id) {
        swal({
            icon: "warning",
            text: "Are you sure you want to delete this listing?",
            buttons: {
                cancel: "Cancel",
                yes: {
                    text: "Yes",
                    value: "remove",
                },
            },
        })
        .then( value => {
            switch (value) {
                case "remove":
                    this.props.deleteProduct(id);
            }
        });
    }

    render() {
        return (
            <>
                <h2 className='profile-products-title'>Your listings:</h2>
                <div className='profile-products-container'>
                    {this.props.myProducts.map(product => {
                        return (
                            <div className='profile-product-item' key={product.id}>
                                <div className='profile-product-item-top'><h4>{product.title}</h4></div>
                                <img src={product.photoUrls[0]} onClick={() => this.linkShow.bind(this)(product.id)} />
                                <p>${(product.price).toFixed(2)}</p>
                                <div className='profile-product-text'>
                                    <a onClick={() => this.removeListing.bind(this)(product.id)}>Remove Listing</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default withRouter(ProfileProducts);