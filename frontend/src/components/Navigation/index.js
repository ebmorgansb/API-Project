import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import {useHistory} from 'react-router-dom'
import { Modal } from '../../context/Modal';
import CreateSpot from '../CreateSpot/CreateSpot';
import SignupForm from '../SignupForm'
import LoginForm from '../LoginForm/LoginForm';

function Navigation({ isLoaded }){
  const [showModal, setShowModal] = useState(false)
  const [showCreate, setShowCreate] = useState(false)
  const [login, setLogin] = useState(true)
  const history = useHistory()

  const sessionUser = useSelector(state => state.session.user);


  return (
    <div className='topBar'>
      <div className='logoAndTitle'>
        <NavLink exact to="/">
        {/* <div className='imgLogo'> */}
        <i
        class="fa-sharp fa-solid fa-mountain-city fa-duotone fa-2x"
        // style="--fa-primary-color: red"
        ></i>
        {/* </div> */}
        </NavLink>
        <h1 className='title'>AirBeeBs</h1>
      </div>
      <div className='createAndCool'>
      {isLoaded && (<ProfileButton user={sessionUser} setLogin={setLogin} setShowModal={setShowModal}/>)}
      { showModal && <Modal onClose={() => setShowModal(false)}>
        {login ? <LoginForm setShowModal={setShowModal} /> : <SignupForm setShowModal={setShowModal} /> }
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
