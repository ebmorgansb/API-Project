import {csrfFetch} from './csrf'

const GETREVIEWS = 'reviews/getReviews'

export const receiveReviewsAction = (reviews) => {
    return {
      type: GETREVIEWS,
      reviews,
    };
  };

  //Thunk for getting all spots
export const getReviewsThunk = (spotId) => async (dispatch) => {
    const res = await fetch(`/api/spots/${spotId}/reviews`);
    if (res.ok) {
      const data = await res.json();
      console.log(data)
      dispatch(receiveReviewsAction(data.Spots));
    }
  };

  //Reducer
    // const initialState = {}
export default function reviewReducer(state = {}, action){
    let newState = {}
  switch(action.type){
    case GETREVIEWS:
      action.reviews.forEach(review => {
        newState[review.id] = review
      })
      return newState
      default:
        return state
    }
  }