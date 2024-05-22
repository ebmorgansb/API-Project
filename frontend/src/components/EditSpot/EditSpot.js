import { useHistory } from "react-router-dom"
import { editSpotThunk } from "../../store/spot"
import { getSpotThunk } from "../../store/spot"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import './editSpot.css'

export default function EditSpot({spot, setShowModal}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const {spotId} = useParams()
    const [address, setAddress] = useState(spot.address || '');
    const [city, setCity] = useState(spot.city || '');
    const [state, setState] = useState(spot.state || '');
    const [country, setCountry] = useState(spot.country || '');
    const [name, setName] = useState(spot.name || '');
    const [description, setDescription] = useState(spot.description || '');
    const [price, setPrice] = useState(spot.price || '');
    const [errors, setErrors] = useState([]);
    const sessUser = useSelector(state => state.session.user)
//test
    useEffect(()=>{
      const errors = []
      if(!sessUser) errors.push("Must be logged in to Host a spot")
      if(!address) errors.push("Street address is required")
      if(address.length > 99) errors.push("Street address must be less than 100 characters")
      if(!city) errors.push("City is required")
      if(city.length > 99) errors.push("City must be less than 100 characters")
      if(!state) errors.push("State is required")
      if(state.length > 99) errors.push("State must be less than 100 characters")
      if(!country) errors.push("Country is required")
      if(country.length > 49) errors.push("Country must be less than 50 characters")
      if(!name) errors.push("Name is required")
      if(name.length > 49) errors.push("Name must be less than 50 characters")
      if(!description) errors.push("Description is required")
      if(description.length > 999) errors.push("Description must be less than 1000 characters")
      if(!price) errors.push("Price per day is required")
      if(price <= 0) errors.push("Price must be greater than $0")
      if (price.toString().length > 9) errors.push("Price must be less than 10 characters")
      setErrors(errors)
    },[price,country, address, city, state, country, name, description, sessUser])


    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            address,
            city,
            state,
            country,
            name,
            description,
            price,
        };


        let newSpot = await dispatch(editSpotThunk(spotId, payload))
        .then(() => setShowModal(false))


        if (newSpot) {
          //The below code is fetching the old Spot
          await dispatch(getSpotThunk(newSpot.id))
          // setShowModal(false)
        }
    }

    return (
      <>
     <h2 className="title">Edit your Spot!</h2>
     <form className="fullSpotEditForm" onSubmit={handleSubmit}>
     <ul className="errors">
      {errors.map((error) => (
        <li className='oneError' key={error}> {error}</li>))}
      </ul>
     <div className="formInputs">
     <div className="oneFormInput">
     <label>
        Address
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        </div>
     </label>
     </div>
     <div className="oneFormInput">
     <label>
        City
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
        <div className="oneFormInput">
        <label>
        State
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
        <div className="oneFormInput">
        <label>
        Country
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
        <div className="oneFormInput">
        <label>
        Name
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
        <div className="oneFormInput">
        Description
        <div className="formPadding">
        <textarea className="textAreaInputEdit"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        </div>
        </div>
        <div className="oneFormInput">
        <label>
        Price
        <div className="formPadding">
        <input className="actualInput"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
        </div>
        <button className="spotEditButton" disabled={errors.length > 0} type='submit'>Submit</button>
      </form>
      </>
    )
}