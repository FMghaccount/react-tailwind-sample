import React from 'react'
import Card from './Card'
import Slider from 'react-slick'
import { courses } from '../data/Courses'

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }

  return (
    <div className='max-w-full mx-auto bg-[#E9F8F3] pb-32 pt-16 px-7 md:px-12'>
      <div className='m-auto xl:container'>
        <div className='py-4'>
          <h1 className='py-3 text-3xl font-bold text-center'>
            <span className='text-[#209CEE]'>لورم ایپسوم</span>
          </h1>
          <p className='text-[#6D737A] text-center leading-9'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>

        <Slider {...settings}>
          {courses.map((course, i) => (
            <div key={i}>
              <Card course={course} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Courses
