import React from 'react'
// import { blogImg1 } from '../assets'
import StarRating from './StarRating'

const Card = ({ course }) => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4'>
      <img
        src={course.linkImg}
        className='md:h-40 max-w-full mx-auto object-cover'
      />
      <div className='p-6 dir-rtl'>
        <h1 className='py-2 text-base md:text-lg xxl:text-xl font-bold truncate'>
          {course.title}
        </h1>
        <StarRating rating={course.rating} />
      </div>
      <h3 className='p-5 text-xl text-right dir-rtl'>{course.price} تومان</h3>

      <div className='absolute top-0 right-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
        {course.category}
      </div>
    </div>
  )
}

export default Card
