 import {useDispatch, useSelector} from 'react-redux'
import { getReviewsThunk } from '../../store/review'
import CreateReviewForm from '../CreateReviewForm/CreateReviewForm'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './allReviews.css'
import { Modal } from '../../context/Modal';
import { deleteReviewThunk } from '../../store/review'
import { NavLink } from 'react-router-dom'

export default function AllReviews () {

  const [showModal, setShowModal] = useState(false);
  // const [reviewUserIds, setReviewUserIds] = useState([])

  let {spotId} = useParams()
  spotId = parseInt(spotId)
  const dispatch = useDispatch()
  let reviews = []

  const sessionUserObject = useSelector(state => state.session.user);
  const reviewsObject = useSelector(state => state.review)
  const userObject = useSelector(state => state.session.user)





  let totalRating = 0

  if (reviewsObject) {
    reviews = Object.values(reviewsObject)
    console.log('Reviews Array', reviews)
    reviews.forEach(review => {
      totalRating += review.stars
    })
  }
  let existingReview = reviews.find(review => review.userId === userObject?.id)

  let avgRating = totalRating/reviews.length
  avgRating = avgRating.toFixed(2)
  if (reviews.length === 0) {
    avgRating = 'New'
  }


  useEffect(() => {
    dispatch(getReviewsThunk(spotId))
  }, [dispatch, spotId])

if (!reviewsObject) return null;

return (
  <>
      <div>
          <div className='buttonAndRating'>
          <div>★{avgRating}  · {reviews.length} reviews</div>
          { existingReview === undefined && userObject &&
          <button className='crudButton2' onClick={() => setShowModal(true)}>Create a Review</button>
          }
          </div>
        </div>
        {showModal && (
        <Modal style='test' onClose={() => setShowModal(false)}>
          <CreateReviewForm setShowModal={setShowModal}/>
        </Modal>
        )}
    <div className='allReviews'>
    {reviews.map(review => (
      <div  className='oneReview'>
        <div className='reviewName'>{review.User?.firstName}</div>
        <div className='reviewDate'>{review.createdAt.substr(0, 7)}</div>
        <div className='reviewDescrip'>{review.review}</div>
        {sessionUserObject?.id === review.User?.id &&
        <div>
        <NavLink to={`/spots/${spotId}`}>
        <button className='crudButton' onClick={()=> {dispatch(deleteReviewThunk(review.id))}}>Delete Review</button>
        </NavLink>
        </div>
        }
      </div>
          ))}
    </div>
</>
)
}
