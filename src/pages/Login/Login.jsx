import React, {useState} from "react";
import loginVector from "../../assets/undraw_sign_up_n6im.svg";
import {FaEyeSlash, FaEye} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
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
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h3 className="text-3xl">Please Login!</h3>
             <form onSubmit={handleSubmit(onSubmit)}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={seePassword ? "text" : "password"}
                  placeholder="password"
                  {...register("password")}
                  required
                  className="input input-bordered "
                />
                <button
                type="button"
                  onClick={() => setSeePassword(!seePassword)}
                  className="absolute top-14 right-6 text-md"
                >
                  {seePassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}
                </button>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
             </form>
              <div className="divider">OR</div>
              <button className="btn btn-primary">with Google </button>
              <p className='text-center'>Are you new here? <Link to="/register" className='text-blue-700'>Please register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
