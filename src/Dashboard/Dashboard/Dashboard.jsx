import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
            
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu navlinkBg p-4 w-80 h-full bg-[#504DA6] text-base-content">
          <h3 className="text-white text-3xl text-center font-semibold">Dashboard</h3>
          <div className="divider before:bg-white after:bg-secondary"></div>
            {/* Sidebar content here */}
            <li className="">
              <NavLink to='/dashboard/selected-class'>Selected Classes</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/enroll-classes'>My Enrolled Classes</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/enroll-classes'>Payment History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
