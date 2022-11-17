import React from 'react'
import Destination from './components/Destination';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Service from './components/Service';
import Offer from './components/Offer';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tours from './components/Tours';

const App = () => {
  return (
   <Router >
      <Navbar />
      
      <Routes>

      <Route exact path="/" element= {
        <>
        <Home /> 
        <Service />
        <Destination />
        <Offer />
        <Tours />
        </>
      
      } />
      <Route exact path="/Home" element={<Home /> }/>
      <Route exact path="/Service" element={<Service/>}/>
      <Route exact path="/Destination" element={<Destination />}/>
      <Route exact path="/Offer" element={ <Offer />}/>
      <Route exact path="/Tours" element={<Tours />}/>
      <Route exact path="/Registration" element={<Registration />}/>
      <Route exact path="/SignIn" element={<SignIn />}/>
    
         </Routes> 
 
   </Router>
  

  )
}

export default App
