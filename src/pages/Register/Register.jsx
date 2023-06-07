import React, { useState } from 'react';
import loginVector from "../../assets/undraw_sign_up_n6im.svg";
import {FaEyeSlash, FaEye} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Register = () => {
    const [seePassword, setSeePassword] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      console.log(data)
  };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginVector} alt="" />
          </div>
          <div className="card  w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <h3 className="text-3xl">Please Register!</h3>
             <form onSubmit={handleSubmit(onSubmit)}>
             <div className="form-control">
                <label className="label">
                  
                </label>
                <input
                  type="text"
                  {...register("name")}
                  required
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
             <div className="form-control">
                <label className="label">
                  
                </label>
                <input
                  type="email"
                  {...register("email")}
                  required
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  
                </label>
                <input
                  type={seePassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  required
                  className="input input-bordered "
                />
                <button
                type="button"
                  onClick={() => setSeePassword(!seePassword)}
                  className="absolute top-8 right-6 text-md"
                >
                  {seePassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}
                </button>
              </div>
              <div className="form-control relative">
                <label className="label">
                  
                </label>
                <input
                  type={seePassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  required
                  className="input input-bordered "
                />
                <button
                type="button"
                  onClick={() => setSeePassword(!seePassword)}
                  className="absolute top-8 right-6 text-md"
                >
                  {seePassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}
                </button>
              </div>
              <div className="form-control mt-6">
              <input
                  type='url'
                  placeholder="Photo URL"
                  {...register("photo")}
                  required
                  className="input input-bordered "
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
             </form>
              <div className="divider">OR</div>
              <button className="btn btn-primary">with Google </button>
              <p className='text-center'>Already have an account? <Link to="/login" className='text-blue-700'>Please Login</Link></p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;