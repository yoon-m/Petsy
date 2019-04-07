export const fetchReviews = (productId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/reviews',
        data: { productId }
    });
};

export const fetchReview = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/reviews/${id}`
    });
};

export const createReview = review => {
    return $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    });
};

export const deleteReview = reviewId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    });
};