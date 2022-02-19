import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Matches from './pages/Matches.js';
import Register from './pages/Register.js';
import Donor from './pages/Donor.js';

import NavBar from './components/NavBar.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/matches' element={ <Matches />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/donor' element={<Donor />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
