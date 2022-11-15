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
// import SignUpFormModal from '../SignUpModal/SignUpModal';
import SignupFormPage from '../SignupFormPage'
import LoginForm from '../LoginFormModal/LoginForm';

function Navigation({ isLoaded }){
  const [showModal, setShowModal] = useState(false)
  const [showCreate, setShowCreate] = useState(false)
  const [login, setLogin] = useState(true)
  const history = useHistory()

  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //     </>
  //   );
  // }

  return (
    <div className='topBar'>
      <div className='logoAndTitle'>
        <NavLink exact to="/">
        <img className='imgLogo' src={favicon}></img>
        </NavLink>
        <h1 className='title'>AirBeeBs</h1>
      </div>
      <div>
      {isLoaded && (<ProfileButton user={sessionUser} setLogin={setLogin} setShowModal={setShowModal}/>)}
      { showModal && <Modal onClose={() => setShowModal(false)}>
        {login ? <LoginForm setShowModal={setShowModal} /> : <SignupFormPage setShowModal={setShowModal} /> }
      </Modal>}
    <button className='becomeHost' onClick={() => setShowCreate(true)}>Become a Host</button>
    {showCreate && (
        <Modal onClose={() => setShowCreate(false)}>
          <CreateSpot setShowCreate={setShowCreate} />
        </Modal>
      )}
      </div>
    </div>
  );
}

export default Navigation;
