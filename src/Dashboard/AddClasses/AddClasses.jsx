import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClasses = () => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {register, handleSubmit, reset} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imageUrl = imageResponse.data.display_url;
          const {name, instructorName, email, availableSeat, price} = data;
          const newClass = {
            name,
            image: imageUrl,
            instructorName,
            email,
            availableSeat,
            price: parseFloat(price),
            enrolled: 0,
            status: "pending",
          };

          axiosSecure.post("/add-class", newClass).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your class has been added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <h3 className="text-3xl text-center font-bold my-4">Add a Class</h3>
      <div className="divider after:bg-black before:bg-black"></div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex justify-around">
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input
                type="text"
                {...register("name", {required: true})}
                placeholder="Class Name"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                {...register("instructorName", {required: true})}
                placeholder="Instructor Name"
                className="input input-bordered w-full max-w-md"
              />
            </div>
          </div>
          <div className="md:flex justify-around my-5">
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                readOnly
                {...register("email", {required: true})}
                placeholder="Instructor Email"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Available Seat</span>
              </label>
              <input
                type="number"
                {...register("availableSeat", {required: true})}
                placeholder="Available Seat"
                className="input input-bordered w-full max-w-md"
              />
            </div>
          </div>
          <div className="md:flex justify-around my-5">
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                {...register("price", {required: true})}
                placeholder="Price"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <input
                type="file"
                {...register("image", {required: true})}
                className="file-input file-input-bordered w-full max-w-md"
              />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <input
              className="btn btn-wide  btn-primary mx-4"
              type="submit"
              value="Add Class"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClasses;
