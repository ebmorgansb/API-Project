import {csrfFetch} from './csrf'

const GETONESPOT = 'spot/getSpot'
const CREATEONESPOT = 'spot/createSpot'
const RECEIVE = 'spots/getAllSpots'

export const receiveSpots = (spots) => {
  return {
    type: RECEIVE,
    spots,
  };
};
//action creator for getting one spot
export const receiveSpot = (spot) => {
  return {
    type: GETONESPOT,
    spot,
  };
};

//action creator for creating one spot
export const createSpotAction = (spot) => {
  return {
    type: CREATEONESPOT,
    spot,
  };
};

//ThunkaDunk for Creating a Spot
export const createSpot = (spot) => async (dispatch) => {
  const { address, city, state, country, name, description, price } = spot;
  const response = await csrfFetch('/api/spots',
  {
 method: 'POST',
 headers: {'Content-Type':'application/json'},
 body: JSON.stringify({
  address,
  city,
  state,
  country,
  name,
  description,
  price,
})
 })

 if (response.ok) {
   const newSpot = await response.json();
   const spotId = newSpot.id
   const images = await csrfFetch(`/${newSpot.id}/images`)
   dispatch(createSpotAction(newSpot));
 }
};


//Thunk for all spots
export const fetchSpots = () => async (dispatch) => {
  const res = await fetch(`/api/spots`);
  // if (res.ok) {
    const data = await res.json();
    console.log('Fetch Spots Thunk', data)
    dispatch(receiveSpots(data.Spots));
  // }
};

//Thunk for getting a spot
export const fetchSpot = (spotId) => async (dispatch) => {
  const res = await fetch(`/api/spots/${spotId}`);
  if (res.ok) {
    const spot = await res.json();
    console.log('Thunk spot data', spot)
    dispatch(receiveSpot(spot));
  }
};

//Reducer
    // const initialState = {}
export default function spotReducer(state = {}, action){
    let newState = {}
  switch(action.type){
    case RECEIVE:
      action.spots.forEach(spot => {
        newState[spot.id] = spot
      })
      return newState
      case GETONESPOT:
        newState[action.spot.id] = action.spot
        return newState
      case CREATEONESPOT:
        newState = {...state, ...action.spot}

        return newState
    default:
      return state
  }
}

//