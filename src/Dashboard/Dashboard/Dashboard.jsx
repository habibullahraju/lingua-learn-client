import React, {useContext} from "react";
import {NavLink, Outlet} from "react-router-dom";
import "./Dashboard.css";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import {AuthContext} from "../../Providers/AuthProvider";
import { FaAdjust, FaBookmark, FaFileAlt, FaMagento, FaMoneyBillAlt, FaSith, FaUserEdit } from 'react-icons/fa';

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log("is admin", isAdmin);
  console.log("is instructor", isInstructor);

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
            <h3 className="text-white text-3xl text-center font-semibold">
              Dashboard
            </h3>
            <div className="divider before:bg-white after:bg-secondary"></div>
            {/* Sidebar content here */}
            {!isAdmin && !isInstructor && (
              <li>
                <NavLink to="/dashboard/selected-class">
                <FaBookmark></FaBookmark>  Selected Classes
                </NavLink>
              </li>
            )}
            {!isAdmin && !isInstructor && (
              <li>
                <NavLink to="/dashboard/enroll-classes">
                 <FaSith></FaSith> My Enrolled Classes
                </NavLink>
              </li>
            )}
            {!isAdmin && !isInstructor && 
            <li>
            <NavLink to="/dashboard/enroll-classes"><FaMoneyBillAlt></FaMoneyBillAlt> Payment History</NavLink>
          </li>
            }
            {/* TODO */}
            {isAdmin && <li>Admin</li>}
            {isInstructor && <li><NavLink><FaAdjust></FaAdjust> Add a Class</NavLink></li>}
            {isInstructor && <li><NavLink><FaFileAlt></FaFileAlt> My Classes</NavLink></li>}
            {isAdmin && <li><NavLink><FaMagento></FaMagento> Manage classes</NavLink></li>}
            {isAdmin && <li><NavLink><FaUserEdit></FaUserEdit> Manage User</NavLink></li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
