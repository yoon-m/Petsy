import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileProducts extends React.Component {
    linkShow(id) {
        this.props.history.push(`/products/${id}`);
    }
    
    render() {
        return (
            <>
                <h2 className='profile-products-title'>Your listings:</h2>
                <div className='profile-products-container'>
                    {this.props.myProducts.map(product => {
                        return (
                            <div className='profile-product-item' onClick={() => this.linkShow.bind(this)(product.id)}>
                                <div className='profile-product-item-top'><h4>{product.title}</h4><h4>{product.price}</h4></div>
                                <img src={product.photoUrls[0]} />
                                <div className='profile-product-text'>
                                    <a href="/#/soon">Update Listing</a><br/>
                                    <a href="/#/soon">Remove Listing</a>
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