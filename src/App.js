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
import InventoryInfo from './componets/Inventorieys/InventoriInfo';
import Dashboard from './componets/Dashboard/Dashboard';
import MyOrders from './componets/Dashboard/MyOrders';
import AddCar from './componets/Dashboard/AddCar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Payment from './componets/Payment/Payment';
import Portfolio from './componets/Portfolio/Portfolio';

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
 
      <Inventory></Inventory>
     
      }>
   </Route>  
   <Route path='/inventory/:id' element={<InventoryInfo></InventoryInfo>}></Route>

   <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
    <Route  index element={<MyOrders></MyOrders>}></Route>
    <Route path='/dashboard/myOrders' element={<MyOrders></MyOrders>}></Route>
   <Route path='/dashboard/addCar' element={<AddCar></AddCar>}></Route>
   </Route>
   <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
   <Route path='/payment/:payId' element={<Payment></Payment>}></Route>
  </Routes>
 
    
  <Footer></Footer>






  </div> 
 

  );
}

export default App;
