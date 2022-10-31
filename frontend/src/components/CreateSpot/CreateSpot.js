import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { createSpot } from "../../store/spot"
import { useHistory } from "react-router-dom"
import { createSpotThunk } from "../../store/spot"

export default function CreateSpot() {
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

        let newSpot = dispatch(createSpotThunk(payload))
        // if (newSpot) {
        //   history.push(`/`);
        // }

    }

    return (
     <form onSubmit={handleSubmit}>
     <label>
        Address
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
     </label>
     <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        </label>
        <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        </label>
        <label>
        Country
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        </label>
        <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </label>
        Description
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <label>
        Price
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </label>
        <label>
        Preview Image
        <input
          type="text"
          value={previewImage}
          onChange={(e) => setPreviewImage(e.target.value)}
          required
        />
        </label>
        <button type='submit'>Submit</button>
      </form>

    )
}