import Home from './components/Home';
import Courses from './components/Courses';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/courses" element = {<Courses/>}/>
        <Route path="*" element = {<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
