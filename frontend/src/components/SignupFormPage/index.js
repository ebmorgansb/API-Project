// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage({setShowModal}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, firstName, lastName }))
      .then(() => setShowModal(false))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    <div className="fullSignupForm">
    <h2>Sign Up!</h2>
    <form onSubmit={handleSubmit}>
      <div className="formInputs">
      <div className="oneFormInput">
      <label>
        Email
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
      </label>
      </div>
      <div className="oneFormInput">
      <label>
        Username
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <div className="oneFormInput">
      <label>
        Confirm Password
        <div className="formPadding">
        <input className="actualInput"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        </div>
      </label>
      </div>
      <div className="oneFormInput">
      <label>
        First Name
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        </div>
      </label>
      </div>
      <div className="oneFormInput">
      <label>
        Last Name
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        </div>
      </label>
      </div>
      </div>
      <button className="signupSubmitButton" type="submit">Sign Up</button>
    </form>
    </div>
    </>
  );
}

export default SignupFormPage;