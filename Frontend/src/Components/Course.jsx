import React, { useEffect, useState } from "react";
// import list from "../../public/list.json"
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import { set } from "react-hook-form";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/books");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto bg-base-100 md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            At our Bookstore, we believe that learning never stops. Our courses
            are thoughtfully designed to inspire, educate, and empower learners
            of all ages. Whether you are pursuing personal growth, professional
            development, or a new hobby, we offer courses that meet your
            needs.We are dedicated to making learning accessible and enjoyable
            for everyone. Our courses are designed to be affordable, inclusive,
            and enriching, ensuring you gain valuable knowledge and skills.
          </p>
          <Link to="/">
            <button className="btn btn-secondary text-white mt-6 px-6 hover:bg-pink-700 duration-300 cursor-pointer">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
