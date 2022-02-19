import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Matches from './pages/Matches.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/matches' element={ <Matches />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
