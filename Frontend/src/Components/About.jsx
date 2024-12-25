import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto bg-base-100 md:px-20 px-4 fixed top-0 left-0 right-0 z-50 mt-[200px]">
        <div className=" flex justify-evenly items-center ">
          <div className="space-y-5  grid-rows-1">
            <h1 className="text-slate-200 text-2xl font-bold">ABOUT US</h1>
            <p> 
              At Bookstore, we believe in the transformative power
              of reading. Our mission is to connect people with books that
              inspire, educate, and entertain. From fiction to non-fiction,
              children’s books to academic texts, our carefully curated
              collection is designed to spark curiosity and fuel your passion
              for reading.
            </p>
            <Link to='/'>
            <button className="bg-slate-600 hover:bg-slate-700 hover:text-white p-4 rounded-lg cursor-pointer mt-3">
              Thank You !
            </button>
            </Link>
          </div>
          <div className="mx-2 hidden md:block">
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
