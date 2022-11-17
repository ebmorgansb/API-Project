import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { createSpot } from "../../store/spot"
import { useHistory } from "react-router-dom"
import { createReviewThunk, getReviewsThunk } from "../../store/review"
import { useParams } from "react-router-dom"
import './createReviewForm.css';

export default function CreateReviewForm({setShowModal}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('');
    const {spotId} = useParams()
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
      const errors = []
      if(!review) errors.push("Review text is required")
      if(!stars) errors.push("Stars must be an integer from 1 to 5")
      setErrors(errors)
    },[review, stars])

    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            review,
            stars
        };

        let newReview = await dispatch(createReviewThunk(payload, spotId))
        if (newReview) {
          await dispatch(getReviewsThunk(spotId))
        setShowModal(false)
        }

    }

    return (
      <>
      <h2 className="title">Add a Review</h2>
      <ul>
      {errors.map((error) => (
        <li key={error}> {error}</li>))}
      </ul>
    <div className="fullReviewForm">
     <form  onSubmit={handleSubmit}>
      <div className="formInputs">
    <div className="oneFormInput">
     <label>
        Review
        <div className="formPadding">
        <textarea className="textAreaInput"
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        </div>
     </label>
     </div>
     <div className="formPadding">
     <label>
                Stars
                <select
                    onChange={(e) => setStars(e.target.value)}
                    value={stars}
                    required
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </label>
            </div>
     {/* <div className="oneFormInput">
     <label className="fontForm">
        Stars: {stars}
        <div className="formPadding">
        <input
          type="range"
          min="1" max="5"
          step="1"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
          required
        />
        </div>
        </label>
        </div> */}
        </div>
        <button className="reviewSubmitButton" type='submit'>Submit</button>
      </form>
    </div>
    </>
    )
}