// import {csrfFetch} from './csrf'

const GETREVIEWS = 'reviews/getReviews'
const CREATEREVIEW = 'reviews/createReview'
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

  //Thunk for getting all spots
export const getReviewsThunk = (spotId) => async (dispatch) => {
    const res = await fetch(`/api/spots/${spotId}/reviews`);
    if (res.ok) {
      const data = await res.json();
      console.log('getReviewsThunk data', data.Reviews)
      dispatch(receiveReviewsAction(data.Reviews));
    }
  };

    //Thunk for creating a review
export const createReviewThunk = (newReview, spotId) => async (dispatch) => {
  const {review, stars} = newReview
  const res = await fetch(`/api/spots/${spotId}/reviews`,
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
    console.log('New Review Thunk', newReview)
    dispatch(createReviewAction)
}
}
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
        newState = {...state, ...action.review}
        return newState
      default:
        return state
    }
  }