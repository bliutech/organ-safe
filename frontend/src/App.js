import './App.css';
import {useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Matches from './pages/Matches.js';
import Register from './pages/Register.js';
import Donor from './pages/Donor.js';
import SignUp from './pages/SignUp.js'

import NavBar from './components/NavBar.js';

function App() {
  let [isAdmin, setisAdmin] = useState(false);
  let [isLoggedIn, setisLoggedin] = useState(false);

  let authenticated = localStorage.getItem("authenticated");

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/signup' element={ <SignUp />}/>
          <Route path='/matches' element={ <Matches />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/donor' element={<Donor />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
