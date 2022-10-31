import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import {useHistory} from 'react-router-dom'
import { Modal } from '../../context/Modal';
import CreateSpot from '../CreateSpot/CreateSpot';

function Navigation({ isLoaded }){
  const [showModal, setShowModal] = useState(false);
  const history = useHistory()
  // function handleClick() {
  //   history.push("/createSpot");
  // }

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='topBar'>
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    <button onClick={() => setShowModal(true)}>Become a Host</button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpot/>
        </Modal>
      )}
    </div>
  );
}

export default Navigation;
