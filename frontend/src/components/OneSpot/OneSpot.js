import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { getSpotThunk } from "../../store/spot"
import { deleteSpotThunk } from "../../store/spot"
import AllReviews from '../AllReviews/AllReviews'
import './oneSpot.css'
import { FaBeer } from 'react-icons/fa'

export default function OneSpot() {
    let {spotId} = useParams()
    spotId = parseInt(spotId)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSpotThunk(spotId))
      }, [dispatch, spotId])

        const spotObject = useSelector(state => state.spot[spotId])
        console.log('Spot Object in One Spot---', spotObject)
        const spotImages = spotObject?.SpotImages
        if (!spotObject || !spotObject.SpotImages) {
            return null
        }

        let imageArr = []
        if (spotObject || spotObject.SpotImages) {
            spotObject.SpotImages.forEach(img => {
                imageArr.push(img.url)
            })
            while (imageArr.length < 6) {
                let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
                imageArr.push(url)
            }
        }

    return (
    <div className="allOneSpot">
        <h2 className="spotTitle">{spotObject.name}</h2>
        <div>
            <div>★{spotObject.avgStarRating} number of reviews hardcoded</div>
            <div>{spotObject.city}, {spotObject.state}, {spotObject.country}</div>
        </div>

        <div className="smallAndBigImgs">
            <div>
                <img className="imgWidth" alt='SpotImage' src={spotObject.SpotImages[0]?.url}></img>
            </div>

            <div>
                <img src={imageArr[1]} alt='spotPix'></img>
                <img src={imageArr[2]} alt='spotPix'></img>
                <img src={imageArr[3]} alt='spotPix'></img>
                <img src={imageArr[4]} alt='spotPix'></img>
            </div>
        </div>

        {/* <div className="allSpotImages">
        {spotImages.map(spotImage => (
            <div className='oneSpotImage' key={spotImage.id}>
            <img className='oneSpotImage' alt='SpotImage' src={spotImage?.url}></img>
            </div>
        ))}
        </div> */}


    <div className="centerOneSpot">

            {/* Hosting information and box to the left about booking */}
        <div className="hostingInfo">

            <div>
                <h2>
                Entire home hosted by John and Doe
                </h2>
                <h3>
                2 guests - 1 bedroom -1 bed - 1 bath
                </h3>
            </div>

            <div className="symbolBox">
                <div className="symbols">
                    <div className="oneSymbol">
                    <i class="fa-solid fa-bolt"></i>
                    </div>
                    <div className="oneSymbol">
                    <i class="fa-solid fa-door-open"></i>
                    </div>
                    <div className="oneSymbol">
                    <i class="fa-solid fa-x"></i>
                    </div>
                </div>

                <div className="symbolAndText">
                    <div>Self Check-in for your convience!</div>
                    <div>John is a superhost!</div>
                    <div>Free cancellation before 48 hours.</div>
                </div>
            </div>

        </div>


            {/* this div is for the booking info on the side */}
        <div className="booking">
            <div className="bookingText">
                ${spotObject.price} night
            </div>
            <div className="bookingText">
            ${spotObject.price} x 2 nights = {spotObject.price * 2}
            </div>
            <div className="bookingText">
                Cleaning Fee = $50
            </div>
            <div className="bookingText">
                Service Fee = $25
            </div>
            <div className="bookingText">
                Total Fee Before Taxes = {spotObject.price * 2 + 50+ 25}
            </div>
        </div>

    </div>


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
    )
}
