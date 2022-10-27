import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { createSpot } from "../../store/spot"
import { useHistory } from "react-router-dom"
import { createReviewThunk } from "../../store/review"
// import {setShowModal} from '../../context/Modal';

export default function CreateReviewForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            review,
            stars
        };

        let newReview = dispatch(createReviewThunk(payload))
        if (newReview) {
            history.push(`/`);
          }
    }

    return (
     <form onSubmit={handleSubmit}>
     <label>
        Review
        <input
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
     </label>
     <label>
        Stars
        <input
          type="text"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
          required
        />
        </label>

        <button type='submit'>Submit</button>
      </form>

    )
}