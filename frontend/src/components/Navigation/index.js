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
import favicon from '../../allImages/favicon.png';

function Navigation({ isLoaded }){
  const [showModal, setShowModal] = useState(false);
  const history = useHistory()

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
      <div className='logoAndTitle'>
        <NavLink exact to="/">
        <img className='imgLogo' src={favicon}></img>
        </NavLink>
        <h1 className='title'>AirBeeBs</h1>
      </div>
      <div>
      {isLoaded && sessionLinks}
    <button className='becomeHost' onClick={() => setShowModal(true)}>Become a Host</button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpot setShowModal={setShowModal} />
        </Modal>
      )}
      </div>
    </div>
  );
}

export default Navigation;
