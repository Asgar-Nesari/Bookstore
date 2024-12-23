import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="p-5 w-[30%]  mx-[400px] mt-[150px] container ">
        <form action="/">
          <p className="items-center text-2xl">Contact Us</p>
          <div className=" space-y-2 mt-2">
            <p>Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full max-w-xs"
              required
              autoFocus
            />
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <p>Message</p>
            <textarea
              className="textarea textarea-bordered max-w-xs max-h-30"
              placeholder="Enter message here"
            />
          </div>
          <button
            className="btn btn-info mt-2 hover:bg-blue-600 duration-200 cursor-pointer hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
