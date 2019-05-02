import * as ReviewAPIUtil from '../util/review_util';
import { RECEIVE_SESSION_ERRORS } from './session_actions';

export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveReviews = reviews => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    };
};

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    };
};

const removeReview = review => {
    return {
        type: REMOVE_REVIEW,
        review
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const fetchReviews = (productId) => dispatch => {
    return ReviewAPIUtil.fetchReviews(productId).then(reviews => dispatch(receiveReviews(reviews)));
};

export const fetchReview = id => dispatch => {
    return ReviewAPIUtil.fetchReview(id).then(review => dispatch(receiveReview(review)));
};

export const createReview = review => dispatch => {
    return ReviewAPIUtil.createReview(review).then(review => dispatch(receiveReview(review)))
        .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const deleteReview = id => dispatch => {
    return ReviewAPIUtil.deleteReview(id).then(review => dispatch(removeReview(review)));
};

export const updateReview = review => dispatch => {
    return ReviewAPIUtil.updateReview(review).then(review => dispatch(receiveReview(review)));
};