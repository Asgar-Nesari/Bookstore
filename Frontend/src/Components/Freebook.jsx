import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getbook=async()=>{
      try {
        const res= await axios.get('http://localhost:4000/books');
        const data=res.data.filter((data) => data.price >= 0)
        setBook(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getbook();
  },[])
  // const filterData = list.filter((data) => data.price >= 0);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-white text-slate-700 max-w-screen-2xl container mx-auto  md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, ullam obcaecati mollitia consequuntur, reiciendis
            cumque maxime vero adipisci aut hic quisquam nobis veniam natus
            nostrum. A maxime harum aperiam nesciunt.
          </p>
        </div>
      
      <div className="bg-white">
        <Slider {...settings}>
          {book.map((item)=>(
            <Cards item={item} key={item.id}/>
           
          ))}
        </Slider>
      </div>
      </div>
    </>
  );
}

export default Freebook;
