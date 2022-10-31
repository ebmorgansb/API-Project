const DELETE = 'books/deleteSingleSpot'
const CREATE = 'spots/CreateNewSpot'

export const actionDeleteSpot = (id) => ({
  type: DELETE,
  id
})

export const actionCreateSpot = (spot) => ({
  type: CREATE,
  spot
})

//Thunk goes here to grab spots data from db, then it
//gets normalized and pushed to reducer
const spots = 'Coming soon'


function normalize(state) {
    const normalState = {}
    spots.forEach(spot => {
        state[spot.id] = spot
    })
    return normalState
}


export default function booksReducer(state = normalize(allSpots), action){
  const newState = {...state}
  switch(action.type){
    case CREATE:
      newState[action.spots.id] = action.spot
      //this is dispatched from the create spot component, as the object with the type and actual spot object
      return newState
    case DELETE:
      delete newState[action.spots.id]
      return newState
    default:
      return state
  }
}