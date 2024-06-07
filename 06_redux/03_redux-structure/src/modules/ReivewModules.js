import { createActions, handleActions } from "redux-actions";

const initialState = {};

const GET_REVIEWLIST = 'review/GET_REVIEWLIST';
const GET_REVIEW = 'review/GET_REVIEW';

export const {review: {getReviewlist, getReview}} = createActions({
    [GET_REVIEWLIST]: result => ({reviewlist: result}),
    [GET_REVIEW]: result => ({review: result})
})

const reviewReducer = handleActions({
    [GET_REVIEWLIST]: (state, {payload}) => payload,
    [GET_REVIEW]: (state, {payload}) => payload
}, initialState);

export default reviewReducer;