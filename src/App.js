import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateAd from './components/CreateAd';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import MediaForm from './components/MediaForm';
import TextMediaForm from './components/TextMediaForm';
import SuccessMsg from './components/SuccessMsg';
import './App.css'

function App() {
  return (
    
  <div>
    <Router>
    <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Navbar/>} /> */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/TextForm" element={<TextForm/>} />
        <Route path='/MediaForm' element={<MediaForm/>} />
        <Route path='/TextMediaForm' element={<TextMediaForm/>} />
        <Route path='/SuccessMsg' element={<SuccessMsg/>} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
