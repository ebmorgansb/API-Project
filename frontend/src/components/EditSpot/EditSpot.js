import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { editSpotThunk } from "../../store/spot"
import { getSpotThunk } from "../../store/spot"
import { useParams } from "react-router-dom"
import './editSpot.css'

export default function EditSpot({setShowModal}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const {spotId} = useParams()
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


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

        if (newSpot) {
          //The below code is fetching the old Spot
          await dispatch(getSpotThunk(newSpot.id))
          setShowModal(false)
        }
    }

    return (
    <div className="fullSpotForm">
      <h2>Edit your Spot</h2>
     <form onSubmit={handleSubmit}>
     <div className="formInputs">
     <div className="oneFormInput">
     <label>
        Address
        <div className="formPadding">
        <input
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
        <input
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
        <input
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
        <input
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
        <input
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
        <textarea className="textAreaInput"
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
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
        </div>
        <button className="spotSubmitButton" type='submit'>Submit</button>
      </form>
      </div>
    )
}