// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home/Home'
import OneSpot from './components/OneSpot/OneSpot'
import EditSpot from "./components/EditSpot/EditSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>
          <Route path="/editSpotty/:spotId" exact>
            <EditSpot/>
          </Route>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/spots/:spotId'>
          <OneSpot/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;