import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto bg-base-100 md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl '>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, possimus quidem eos, pariatur aperiam aspernatur tenetur libero voluptates voluptatem, deleniti commodi praesentium amet non adipisci porro quae earum nobis architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores quis ipsa recusandae velit illo, doloribus aspernatur inventore repellat porro quia rem. Illo, repellat tenetur mollitia esse quam minus architecto?</p>

        <Link to='/'>
        <button className="btn btn-secondary text-white mt-6 px-6 hover:bg-pink-700 duration-300 cursor-pointer">Back</button> 
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
        {
          list.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))
        }
      </div>

    </div>
    </>
  )
}

export default Course
