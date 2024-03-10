import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Registry from './routes/Registry';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Registry/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
