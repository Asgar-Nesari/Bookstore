import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
  
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div id="my_modal_3" className="w-[600px] p-5 ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >
                ✕
              </Link>
            
            <h3 className="font-bold text-lg">Signup</h3>
            {/* name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Fullname"
                className="input input-bordered w-full "
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className="text-sm text-red-400 mx-2">This field is required</span>}
            </div>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered w-full "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-400 mx-2">This field is required</span>}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="input input-bordered w-full"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-400 mx-2">This field is required</span>}
            </div>
            {/* button */}
            <div className="flex justify-around mt-4 items-center space-x-5">
              <button  className="btn btn-secondary text-white font-normal hover:bg-pink-600 duration-200 cursor-pointer">
                Signup
              </button>
              <p className="text-xl">
                Have account!{" "}
                <Link
                  to='/'
                  className="underline text-blue-500 cursor-pointer"
                  onClick={()=>document.getElementById('my_modal_3').showModal()}
                >
                  Login
                </Link>
                <Login/>
              </p>
              
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;