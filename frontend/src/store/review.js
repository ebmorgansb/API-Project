import {csrfFetch} from './csrf'

const GETREVIEWS = 'reviews/getReviews'
const CREATEREVIEW = 'reviews/createReview'
const DELETEREVIEW = 'reviews/deleteReview'
export const receiveReviewsAction = (reviews) => {
    return {
      type: GETREVIEWS,
      reviews,
    };
  };

  export const createReviewAction = (review) => {
    return {
      type: CREATEREVIEW,
      review,
    };
  };

  export const deleteReviewAction = (reviewId) => {
    return {
      type: DELETEREVIEW,
      reviewId,
    };
  };

  //Thunk for getting all reviews
export const getReviewsThunk = (spotId) => async (dispatch) => {
    const res = await fetch(`/api/spots/${spotId}/reviews`);
    if (res.ok) {
      const data = await res.json();
      dispatch(receiveReviewsAction(data.Reviews));
    }
  };

    //Thunk for creating a review
export const createReviewThunk = (newReview, spotId) => async (dispatch) => {
  const {review, stars} = newReview
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`,
  {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      review,
      stars
   })
    })
  if (res.ok) {
    const newReview = await res.json();
    // newReview.User = {}
    dispatch(createReviewAction(newReview))
    return newReview
}
}


//Thunk for deleting a review
export const deleteReviewThunk = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {method: 'DELETE'});
  if (res.ok) {
    // const data = await res.json();
    dispatch(deleteReviewAction(reviewId));
    // return data
  }
};


  //Reducer


export default function reviewReducer(state = {}, action){
    let newState = {}
  switch(action.type){
    case GETREVIEWS:
      action.reviews.forEach(review => {
        newState[review.id] = review
      })
      return newState
      case CREATEREVIEW:
        newState = {...state}
        newState[action.review.id] = action.review
        return newState
        case DELETEREVIEW:
          newState = {...state}
          delete newState[action.reviewId]
            return newState
      default:
        return state
    }
  }