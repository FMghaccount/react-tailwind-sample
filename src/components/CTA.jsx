import React from 'react'
import { cta } from '../assets'

const CTA = () => {
  return (
    <div className='max-w-full mx-auto bg-[#E9F8F3] py-24 px-3'>
      <div className='m-auto xl:container grid md:grid-cols-2 gap-8 items-center'>
        <img src={cta} className='w-[650px] mx-auto' />

        <div className='dir-rtl'>
          <h1 className='py-2 text-3xl font-semibold text-center md:text-right leading-[2]'>
            <span className='text-[#209CEE]'>لورم ایپسوم </span> متن ساختگی
          </h1>
          <p className='py-2 text-lg text-gray-600 text-center md:text-right leading-9'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
          <button className='w-full sm:w-1/2 my-4 px-8 py-5 rounded-md bg-[#209CEE] text-white font-bold block mx-auto md:mr-0'>
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA
