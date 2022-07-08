import React from "react";
import { Link ,Outlet} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Dashboard = ()=>{
    const [users] = useAuthState(auth);

    console.log(users)
    return(
        <div>
          <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col  ">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  </div> 
  <div class="drawer-side  ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-green-600  text-white sm:text-xl md:text-[15px]">
      <li><Link to={'/dashboard/myOrders'}>My Orders</Link></li>
    <li><Link to={'/dashboard/addCar'}>Add CAR</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    )
}

export default Dashboard;