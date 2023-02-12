import React from 'react'
import { cta } from '../assets'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='max-w-full lg:container mx-auto bg-white py-24 pt-48 px-3'>
      <div className='m-auto grid md:grid-cols-2'>
        <img src={cta} className='order-first' />
        <div className='flex flex-col justify-start gap-4'>
          <h1 className='py-2 mt-20 md:mt-0 text-[#209CEE] text-center md:text-right leading-relaxed'>
            لورم ایپسوم متن ساختگی
          </h1>
          <p className='py-2 text-center md:text-right text-gray-600 leading-8'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>

          {/* <form className='bg-white border max-w-[700px] p-4 input-box-shadow rounded-md flex justify-between'>
            <input
              className='bg-white'
              type='text'
              placeholder='جستجو جو در درس ها'
            />
            <button>
              <AiOutlineSearch
                size={20}
                className='icon'
                style={{ color: '#000' }}
              />
            </button>
          </form> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
