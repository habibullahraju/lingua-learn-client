import React, {useContext} from "react";
import {NavLink, Outlet} from "react-router-dom";
import "./Dashboard.css";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import {AuthContext} from "../../Providers/AuthProvider";
import { FaAdjust, FaBookmark, FaFileAlt, FaMagento, FaMoneyBillAlt, FaSith, FaUserEdit } from 'react-icons/fa';
import {motion} from "framer-motion";

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log("is admin", isAdmin);
  console.log("is instructor", isInstructor);

  return (
    <div className="">
    <motion.h1
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 2,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1 }}
        
   
    >
        <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Menu
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
            <NavLink to="/dashboard/payment-history"><FaMoneyBillAlt></FaMoneyBillAlt> Payment History</NavLink>
          </li>
            }
            {/* TODO */}
            
            {isInstructor && <li><NavLink to="/dashboard/add-class"><FaAdjust></FaAdjust> Add a Class</NavLink></li>}
            {isInstructor && <li><NavLink to="/dashboard/my-classes"><FaFileAlt></FaFileAlt> My Classes</NavLink></li>}
            {isAdmin && <li><NavLink to="/dashboard/manage-classes"><FaMagento></FaMagento> Manage classes</NavLink></li>}
            {isAdmin && <li><NavLink to="/dashboard/manage-users"><FaUserEdit></FaUserEdit> Manage User</NavLink></li>}
          </ul>
        </div>
      </div>
    </div>
    </motion.h1>
</div>
    
  );
};

export default Dashboard;
