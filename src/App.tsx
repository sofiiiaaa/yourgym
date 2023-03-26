import Home from './components/Home';
import Courses from './components/Courses';
import ErrorPage from './components/ErrorPage';
import NavigationBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import React from 'react';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavigationBar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/courses" element = {<Courses/>}/>
        <Route path="*" element = {<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
