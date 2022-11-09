
import './SpotCard.css'
import {useDispatch, useSelector} from 'react-redux'
import {getSpotsThunk} from '../../store/spot'
import {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
export default function SpotCard () {

  // const {spotId} = useParams()
  const dispatch = useDispatch()


  let spots = []
  const spotsObject = useSelector(state => state.spot)
  if (spotsObject) {
    spots = Object.values(spotsObject)
  }

  useEffect(() => {
    dispatch(getSpotsThunk())
  }, [dispatch])

if (!spotsObject) return null;

  return (
    <div className='allSpotCards'>
    {spots.map(spot => (
      // style={{ textDecoration: 'none' }}
      <Link className='spotCard' key={`f${spot.id}`} to={`/spots/${spot.id}`}>
        <img alt='Spot Picture' key={`f${spot.id}`} className='spotCardImg' src={`${spot.previewImage}`}></img>
        <div className='spotCardText'>
          <div>
            <div key={`c${spot.id}`}>{`${spot.city}, ${spot.state}`}</div>
            <div key={`h${spot.id}`}>United States</div>
            <div key={`e${spot.id}`}>${spot.price} night</div>
          </div>
          <div key={`d${spot.id}`}>★{spot.avgRating}</div>
        </div>
      </Link>
          ))}
    </div>
  )
    }