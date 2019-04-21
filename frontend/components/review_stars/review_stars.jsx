import React from 'react';

class ReviewStars extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        document.getElementById(`${this.props.id}a`).style.color = 'gold';
        document.getElementById(`${this.props.id}b`).style.color = 'gold';
        document.getElementById(`${this.props.id}c`).style.color = 'gold';
        document.getElementById(`${this.props.id}d`).style.color = 'gold';
        document.getElementById(`${this.props.id}e`).style.color = 'gold';
    }

    componentDidUpdate() {
        debugger
        // let productAVGRating = 0;
        // let productTOTRating = 0;

        // this.props.reviews.forEach(review => {
        //     productTOTRating += review.rating;
        // });

        // productAVGRating = Math.round(productTOTRating / this.props.reviews.length);

        // if (productAVGRating) {
        //     if (productAVGRating === 4) {
        //         document.getElementById(`${this.props.id}e`).style.color = 'black';
        //     } else if (productAVGRating === 3) {
        //         document.getElementById(`${this.props.id}d`).style.color = 'black';
        //         document.getElementById(`${this.props.id}e`).style.color = 'black';
        //     } else if (productAVGRating === 2) {
        //         document.getElementById(`${this.props.id}c`).style.color = 'black';
        //         document.getElementById(`${this.props.id}d`).style.color = 'black';
        //         document.getElementById(`${this.props.id}e`).style.color = 'black';
        //     } else if (productAVGRating === 1) {
        //         document.getElementById(`${this.props.id}b`).style.color = 'black';
        //         document.getElementById(`${this.props.id}c`).style.color = 'black';
        //         document.getElementById(`${this.props.id}d`).style.color = 'black';
        //         document.getElementById(`${this.props.id}e`).style.color = 'black';
        //     }
        // }
    }
    

    render() {
        debugger
        let productAVGRating = 0;
        let productTOTRating = 0;
        this.props.reviews.forEach(review => {
            productTOTRating += review.rating;
        });

        productAVGRating = Math.round(productTOTRating / this.props.reviews.length);

        if (productAVGRating && document.getElementById(`${this.props.id}e`)) {
            if (productAVGRating === 4) {
                document.getElementById(`${this.props.id}e`).style.color = 'black';
            } else if (productAVGRating === 3) {
                document.getElementById(`${this.props.id}d`).style.color = 'black';
                document.getElementById(`${this.props.id}e`).style.color = 'black';
            } else if (productAVGRating === 2) {
                document.getElementById(`${this.props.id}c`).style.color = 'black';
                document.getElementById(`${this.props.id}d`).style.color = 'black';
                document.getElementById(`${this.props.id}e`).style.color = 'black';
            } else if (productAVGRating === 1) {
                document.getElementById(`${this.props.id}b`).style.color = 'black';
                document.getElementById(`${this.props.id}c`).style.color = 'black';
                document.getElementById(`${this.props.id}d`).style.color = 'black';
                document.getElementById(`${this.props.id}e`).style.color = 'black';
            }
        }
        return (
            <>
                <span><i className="fas fa-star" id={`${this.props.id}a`}></i></span>
                <span><i className="fas fa-star" id={`${this.props.id}b`}></i></span>
                <span><i className="fas fa-star" id={`${this.props.id}c`}></i></span>
                <span><i className="fas fa-star" id={`${this.props.id}d`}></i></span>
                <span><i className="fas fa-star" id={`${this.props.id}e`}></i></span>
            </>
        )
    }
}

export default ReviewStars;