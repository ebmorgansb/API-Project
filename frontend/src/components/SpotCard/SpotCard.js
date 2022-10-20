
import './SpotCard.css'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSpots} from '../../store/spot'
import {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
export default function SpotCard () {

  const dispatch = useDispatch()


  let spots = []
  const spotsObject = useSelector(state => state.spot)
  console.log('jbwbafewfbhBWFBFE', spotsObject)
  if (spotsObject) {
    spots = Object.values(spotsObject)
  }

  useEffect(() => {
    dispatch(fetchSpots())
  }, [dispatch])


  return (
    <div>
    {spots.map(spot => (
      <NavLink to={`/spots/${spot.id}`}>
      <div key={`a${spot.id}`} className='spotCard'>
        <div key={`b${spot.id}`} className='spotCardUpperText'>
          <div key={`c${spot.id}`}>{`${spot.city}, ${spot.state}`}</div>
          <div key={`d${spot.id}`}>Star Rating</div>
        </div>
        <div key={`e${spot.id}`}>{`$${spot.price} per night`}</div>
        <img alt='Spot Picture' key={`f${spot.id}`} className='spotCardImg' src={`${spot.previewImage}`}></img>
      </div>
      </NavLink>
          ))}
    </div>
  )
    }
