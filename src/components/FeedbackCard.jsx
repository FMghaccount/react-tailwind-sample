import React from 'react'
import { avatar } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between dir-rtl'>
        <div className='flex gap-4'>
                <img className='self-center' src={avatar} />
                <div>
                    <h1 className='my-0 mb-2 text-lg md:text-3xl xl:text-4xl'>لورم ایپسوم</h1>
                    <p className='text-sm md:text-lg xl:text-xl'>متن ساختگی</p>
                </div>
            
            </div>
            {/* <img className='h-8' src={quotationMark} /> */}
      </div>

      <div className='py-8 dir-rtl leading-9'>
        <span className='text-sm md:text-lg text-justify leading-9'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </span>
      </div>
    </div>
  )
}

export default FeedbackCard