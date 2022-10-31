import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { getSpotThunk } from "../../store/spot"
import { deleteSpotThunk } from "../../store/spot"
import AllReviews from '../AllReviews/AllReviews'
import './oneSpot.css'

export default function OneSpot() {
    let {spotId} = useParams()
    spotId = parseInt(spotId)

        const dispatch = useDispatch()

        const spotObject = useSelector(state => state.spot[spotId])
        console.log('Spot Object in OneSpot component',spotObject)

        useEffect(() => {
          dispatch(getSpotThunk(spotId))
        }, [dispatch, spotId])

        if (!spotObject || !spotObject.SpotImages) {
            return null
        }

    return (
        <>
    <div>
        <h2>{spotObject.name}</h2>
        <div>
            <div>★{spotObject.avgStarRating} number of reviews hardcoded</div>
            <div>{spotObject.city}, {spotObject.state}, {spotObject.country}</div>
        </div>
        <img alt='SpotImage' src={spotObject.SpotImages[0]?.url}></img>

        <div className="spotDescriptionTopBorder">{spotObject.description}</div>

        <div className="editDeleteSpot">
        <NavLink to={`/editSpotty/${spotId}`}>
        <button>Edit Spot</button>
        </NavLink>
        <NavLink to={`/`}>
        <button onClick={()=> {dispatch(deleteSpotThunk(spotId))}}>Delete Spot</button>
        </NavLink>
        </div>
        <AllReviews/>
    </div>
    </>
    )
}
