// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home/Home.js'
import Destination from './pages/Destination/Destination.js'
import Crew from './pages/Crew/Crew.js'
import Technology from './pages/Technology/Technology.js'
import Discover from './pages/Discover/Discover.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/discover' element={<Discover />} />
      </Routes>
    </Router>
  );
}

export default App;