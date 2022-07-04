import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar/Navbar';
import Home from './componets/Home/Home';
import { useEffect, useState } from "react";
import Register from './componets/Login/Register';
import Footer from './componets/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './componets/Login/Login';
import RequireAuth from './componets/Login/RequirAuth';
import Inventory from './componets/Inventorieys/Inventory';

function App() {

  return (
    <div>
       
  

    
  <Navbar></Navbar>
  


  <Routes>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path="/inventory" element={
        <RequireAuth>
      <Inventory></Inventory>
        </RequireAuth>
      }></Route>  
  </Routes>
 
    
  <Footer></Footer>






  </div> 
 

  );
}

export default App;
