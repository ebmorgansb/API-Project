import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { createSpotThunk } from "../../store/spot"
import { getSpotThunk } from "../../store/spot"
import './createSpot.css'

export default function CreateSpot({setShowCreate}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [previewImage, setPreviewImage] = useState('')
    const [errors, setErrors] = useState([]);
    const sessUser = useSelector(state => state.session.user)


    useEffect(()=>{
      const errors = []
      if(!sessUser) errors.push("Must be logged in to Host a spot")
      if(!address) errors.push("Street address is required")
      if(!city) errors.push("City is required")
      if(!state) errors.push("State is required")
      if(!country) errors.push("Country is required")
      if(name.length > 50) errors.push("Name must be less than 50 characters")
      if(!description) errors.push("Description is required")
      if(!price) errors.push("Price per day is required")
      if(price < 1) errors.push("Price must be greater than $0")

      setErrors(errors)
    },[price, address, city, state, country, name, description, sessUser])

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
            previewImage
        };

        let newSpot = await dispatch(createSpotThunk(payload))
        if (newSpot) {
          history.push(`/spots/${newSpot.id}`)
          setShowCreate(false)
          // await dispatch(getSpotThunk(newSpot.id))
        }
      }

    return (
      <>
      <h2 className="title">Add a Spot!</h2>
     <form className="fullSpotFormCreateSpot" onSubmit={handleSubmit}>
     <ul className="errors">
  {errors.map((error) => (
        <li className="oneError" key={`a${error}`}> {error}</li>))}
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
        <textarea className="textAreaInputCreate"
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
        <div className="oneFormInput">
        <label>
        Preview Image
        <div className="formPadding">
        <input className="actualInput"
          type="url"
          value={previewImage}
          onChange={(e) => setPreviewImage(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
        </div>
        <button className="spotSubmitButton" disabled={errors.length > 0} type='submit'>Submit</button>
      </form>
    </>
    )
}