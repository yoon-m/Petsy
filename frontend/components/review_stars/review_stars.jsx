import React from 'react';

class ReviewStars extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById(`${this.props.productId}a`).style.color = 'gold';
        document.getElementById(`${this.props.productId}b`).style.color = 'gold';
        document.getElementById(`${this.props.productId}c`).style.color = 'gold';
        document.getElementById(`${this.props.productId}d`).style.color = 'gold';
        document.getElementById(`${this.props.productId}e`).style.color = 'gold';
        this.props.fetchReviews(this.props.productId);
    }

    render() {
        let productAVGRating = 0;
        let productTOTRating = 0;
        
        if (this.props.reviews.length != 0 && this.props.reviews[0].product_id === this.props.productId) {
            this.props.reviews.forEach(review => {
                productTOTRating += review.rating;
            });

            productAVGRating = Math.round(productTOTRating / this.props.reviews.length);

            if (productAVGRating && document.getElementById(`${this.props.productId}e`)) {
                if (productAVGRating === 4) {
                    document.getElementById(`${this.props.productId}e`).style.color = 'black';
                } else if (productAVGRating === 3) {
                    document.getElementById(`${this.props.productId}d`).style.color = 'black';
                    document.getElementById(`${this.props.productId}e`).style.color = 'black';
                } else if (productAVGRating === 2) {
                    document.getElementById(`${this.props.productId}c`).style.color = 'black';
                    document.getElementById(`${this.props.productId}d`).style.color = 'black';
                    document.getElementById(`${this.props.productId}e`).style.color = 'black';
                } else if (productAVGRating === 1) {
                    document.getElementById(`${this.props.productId}b`).style.color = 'black';
                    document.getElementById(`${this.props.productId}c`).style.color = 'black';
                    document.getElementById(`${this.props.productId}d`).style.color = 'black';
                    document.getElementById(`${this.props.productId}e`).style.color = 'black';
                }
            }
        }
        
        return (
            <>
                <span><i className="fas fa-star" id={`${this.props.productId}a`}></i></span>
                <span><i className="fas fa-star" id={`${this.props.productId}b`}></i></span>
                <span><i className="fas fa-star" id={`${this.props.productId}c`}></i></span>
                <span><i className="fas fa-star" id={`${this.props.productId}d`}></i></span>
                <span><i className="fas fa-star" id={`${this.props.productId}e`}></i></span>
            </>
        )
    }
}

export default ReviewStars;