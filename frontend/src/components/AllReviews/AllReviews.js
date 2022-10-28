import {useDispatch, useSelector} from 'react-redux'
import { getReviewsThunk } from '../../store/review'
import CreateReviewForm from '../CreateReviewForm/CreateReviewForm'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './allReviews.css'
import { Modal } from '../../context/Modal';


export default function AllReviews () {
  const [showModal, setShowModal] = useState(false);
  let {spotId} = useParams()
  spotId = parseInt(spotId)
  const dispatch = useDispatch()
  let reviews = []
  // let reviewImages = []
  const reviewsObject = useSelector(state => state.review)
  console.log('reviews comp', reviewsObject)
  if (reviewsObject) {
    reviews = Object.values(reviewsObject)
    // console.log('reviewsImg', reviews[0]?.ReviewImages[0].url)
  }

  useEffect(() => {
    dispatch(getReviewsThunk(spotId))
  }, [dispatch, spotId])

if (!reviewsObject) return null;

return (
  <>
      <button onClick={() => setShowModal(true)}>Create a Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm/>
        </Modal>
      )}
    <div className='allReviews'>
    {reviews.map(review => (
      <div className='oneReview'>
         <div>{reviews[0]?.User.firstName}</div> 
        <div>{reviews[0]?.createdAt.substr(0, 7)}</div>
        <div>{review.review}</div>
      </div>
          ))}
    </div>
    </>
)
}