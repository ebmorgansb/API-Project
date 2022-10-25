import { useSelector, useDispatch } from "react-redux"
import { getSpotThunk } from "../../store/spot"
import { deleteSpotThunk } from "../../store/spot"
import { editSpotAction } from "../../store/spot"
import { editSpotThunk } from "../../store/spot"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { deleteSpotAction } from "../../store/spot"
import { NavLink } from "react-router-dom"

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
    <div>
        <h2>{spotObject.name}</h2>
        <div>
            <div>★{spotObject.avgStarRating} number of reviews hardcoded</div>
            <div>{spotObject.city}, {spotObject.state}, {spotObject.country}</div>
        </div>
        <img alt='SpotImage' src={spotObject.SpotImages[0]?.url}></img>
        <div>{spotObject.description}</div>
        <NavLink to={`/editSpotty/${spotId}`}>
        <button>Edit Spot</button>
        </NavLink>
        <NavLink to={`/`}>
        <button onClick={()=> {dispatch(deleteSpotThunk(spotId))}}>Delete Spot</button>
        </NavLink>
    </div>
    )
}
