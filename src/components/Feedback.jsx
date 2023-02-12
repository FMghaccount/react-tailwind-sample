import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import { courses } from '../data/Courses';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div className='max-w-full lg:container mx-auto bg-white py-32 px-7 md:px-12'>
        <div className='m-auto'>
            <div className='py-4 dir-rtl'>
              <h1 className='py-3 text-3xl font-bold text-center'><span className='text-[#209CEE]'>لورم ایپسوم</span></h1>
              <p className='text-[#6D737A] text-center'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>
            </div>
            
            <Slider {...settings} >
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </Slider>
            
        </div>

    </div>
  )
}

export default Feedback