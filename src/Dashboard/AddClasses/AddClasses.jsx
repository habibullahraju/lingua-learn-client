import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../Providers/AuthProvider";

const AddClasses = () => {
  const {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
};
  return (
    <div>
      <h3 className="text-3xl text-center font-bold my-4">Add a Class</h3>
      <div className="divider after:bg-black before:bg-black"></div>

      <div>
        {/* <form>
          <input defaultValue="test" {...register("example")} />
          <input {...register("exampleRequired", {required: true})} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form> */}
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
              <input type="file"
                {...register("image", {required: true})}
               className="file-input file-input-bordered w-full max-w-md" />
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
