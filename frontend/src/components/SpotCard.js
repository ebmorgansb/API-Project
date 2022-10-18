
import './CompCSS/SpotCard.css'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSpots} from '../store/spots'
import {useEffect} from 'react'
function SpotCard () {

  // {spots.map(ele => (
  //   // <div className="spotCard">

  //               <div>

  //               <img key={ele.id} className='spotsImg' src={`${ele.previewImage}`}></img>
  //                   <h2>hello</h2>
  //               </div>


  //               ))}


  const dispatch = useDispatch()


  let spots = []
  const spotsObject = useSelector(state => state.spots)
  if (spotsObject) {
    spots = Object.values(spotsObject)
    console.log(spots)
  }

  useEffect(() => {
    dispatch(fetchSpots())
  }, [dispatch])


  return (
    <div>
    {spots.map(spot => (
      <div>
      <img key={spot.id} src={`${spot.previewImage}`}></img>
      </div>
          ))}
          </div>
  )
}

  export default SpotCard
