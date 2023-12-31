import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import logo from '../../../../public/logo.png';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/all-classes">Classes</Link>
      </li>
     { user&& <li>
        <Link to='/dashboard/selected-class'>Dashboard </Link>
      </li>}
    </>
  );
  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(error =>{
      console.log(error);
    })
  };
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl"><img className="w-10" src={logo} alt="" /> Lingua Learn</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <div className="">
            <label className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cart?.length}</span>
              </div>
            </label>
          </div>
         {user && <div className="">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
          </div>}
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
