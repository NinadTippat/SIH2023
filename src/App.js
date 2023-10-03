import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './Pages/Home';
import Chatbot from './Pages/Chatbot';

function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat-bot" element={<Chatbot/>} />
        <Route from="/" to="/home" /> {/* Redirect the root URL to /home */}
      </Routes>
    </BrowserRouter>
      </div>
    </>
  );
}

export default App;
