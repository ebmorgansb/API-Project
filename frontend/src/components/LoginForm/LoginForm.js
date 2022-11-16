// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './loginForm.css'

function LoginForm({setShowModal}) {
  console.log('correct one')
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation()
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password }))
    .then(() => {
      // console.log('in the then')
      setShowModal(false)
    })
    .catch(
      async (res) => {
        const data = await res.json();
        // console.log('in the catch', (data && data.errors))
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className="fullLoginForm">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <div className="formInputs">
      <div className="oneFormInput">
      <label>
        Username or Email
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        </div>
      </label>
      </div>
      <div className="oneFormInput">
      <label>
        Password
        <div className="formPadding">
        <input className="actualInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
      </label>
      </div>
      <div>
      <button  className='loginSubmitButton' type="submit">Log In</button>
      </div>
      <div >
      <button className='loginSubmitButton' type="submit"
      onClick={()=>{setCredential("Demo-lition");setPassword("password")}}>Demo Login</button>
      </div>
      </div>
    </form>
    </div>
    </>
  );
}

export default LoginForm;