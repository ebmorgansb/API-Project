
import {useDispatch, useSelector} from 'react-redux'
import { getReviewsThunk } from '../../store/review'
import {useEffect} from 'react'

export default function AllReviews () {

  const dispatch = useDispatch()
  let reviews = []

  const reviewsObject = useSelector(state => state.review)
  if (reviewsObject) {
    reviews = Object.values(reviewsObject)
  }

  useEffect(() => {
    dispatch(getReviewsThunk())
  }, [dispatch])

if (!reviewsObject) return null;

return (
    <div>
        <div>test Review</div>
    {reviews.map(review => (

      <div>
        {review}
      </div>
          ))}
    </div>
)
}