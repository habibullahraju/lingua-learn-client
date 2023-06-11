import React, {useContext, useState} from "react";
import loginVector from "../../assets/undraw_sign_up_n6im.svg";
import {FaEyeSlash, FaEye} from "react-icons/fa";
import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [passMatch, setPassMatch] = useState("");
  const {createUser, updateUserProfile, signInWithGoogle} =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return setPassMatch("your password does not match");
    } else {
      setPassMatch("");
    }
    console.log(data.photo);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              image: data.photo,
            };
            fetch("https://lingualearn-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  navigate(from, {replace: true});
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
            reset();
            //TODO: this line i will do navigate
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,
        };
        fetch("https://lingualearn-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, {replace: true});
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
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
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("name")}
                    required
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="email"
                    {...register("email")}
                    required
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control relative">
                  <label className="label"></label>
                  <input
                    type={seePassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                      minLength: 6,
                      pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
                    })}
                    required
                    className="input input-bordered "
                  />
                  {errors.password && (
                    <span>
                      minimum one Capital letter and special characters
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => setSeePassword(!seePassword)}
                    className="absolute top-8 right-6 text-md"
                  >
                    {seePassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </button>
                </div>
                <div className="form-control relative">
                  <label className="label"></label>
                  <input
                    type={seePassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                    required
                    className="input input-bordered "
                  />
                  {passMatch}
                  <button
                    type="button"
                    onClick={() => setSeePassword(!seePassword)}
                    className="absolute top-8 right-6 text-md"
                  >
                    {seePassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </button>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="url"
                    placeholder="Photo URL"
                    {...register("photo")}
                    required
                    className="input input-bordered "
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <div className="divider">OR</div>
              <button onClick={handleGoogleLogin} className="btn btn-primary">
                with Google{" "}
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-700">
                  Please Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
