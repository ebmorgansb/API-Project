import { useSelector, useDispatch } from "react-redux"
import { fetchSpot } from "../../store/spot"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function OneSpot() {
    let {spotId} = useParams()
    spotId = parseInt(spotId)

        const dispatch = useDispatch()

        const spotObject = useSelector(state => state.spot)
        const spotArray = Object.values(spotObject)
        console.log('Spot Object in OneSpot component',spotObject)
        console.log('oneSpotArray in component', spotArray)
        useEffect(() => {
          dispatch(fetchSpot(spotId))
        }, [dispatch, spotId])

    return (
    <div>
        <h2>{spotObject.name}</h2>
        <div>
            <div>★{spotObject.avgStarRating} number of reviews hardcoded</div>
            <div>{spotObject.city}, {spotObject.state}, {spotObject.country}</div>
        </div>
        {/* <img alt='SpotImage' src={`${spotObjectImage?.url}`}></img> */}
        <div>{spotObject.description}</div>
    </div>
    )
}
