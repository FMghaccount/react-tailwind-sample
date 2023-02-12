import React from 'react'
import { achievement } from '../assets'
import { SlGraduation } from 'react-icons/sl'
import { FiVideo } from 'react-icons/fi'
import { SlPeople } from 'react-icons/sl'

const Achievement = () => {
  return (
    <div className='max-w-full lg:container mx-auto bg-white py-24 px-3'>
      <div className='m-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center dir-rtl'>
          <h1 className='md:leading-[72px] text-3xl font-bold text-center md:text-right mt-20 md:mt-0'>
            <span className='text-[#209CEE]'>لورم ایپسوم</span>
          </h1>
          <p className='text-lg text-gray-600 text-center md:text-right leading-9'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>

          <div className='grid grid-cols-2 py-16 justify-items-center'>
            <div className='py-6 flex'>
              <div className='p-4 bg-[#E9F8F3] rounded-xl self-center'>
                <SlGraduation size={30} style={{ color: '#1A906B' }} />
              </div>
              <div className='px-3'>
                <h1 className='text-2xl font-semibold mt-0'>300</h1>
                <p className='text-[#6D737A]'>لورم ایپسوم</p>
              </div>
            </div>
            <div className='py-6 flex'>
              <div className='p-4 bg-[#FFFAF5] rounded-xl self-center'>
                <FiVideo size={30} style={{ color: '#FFC27A' }} />
              </div>
              <div className='px-3'>
                <h1 className='text-2xl font-semibold mt-0'>1000+</h1>
                <p className='text-[#6D737A]'>لورم ایپسوم</p>
              </div>
            </div>
            <div className='py-6 flex'>
              <div className='p-4 bg-[#FFEEF0] rounded-xl self-center'>
                <SlGraduation size={30} style={{ color: '#ED4459' }} />
              </div>
              <div className='px-3'>
                <h1 className='text-2xl font-semibold mt-0'>2000+</h1>
                <p className='text-[#6D737A]'>لورم ایپسوم</p>
              </div>
            </div>
            <div className='py-6 flex'>
              <div className='p-4 bg-[#F0F7FF] rounded-xl self-center'>
                <SlPeople size={30} style={{ color: '#0075FD' }} />
              </div>
              <div className='px-3'>
                <h1 className='text-2xl font-semibold mt-0'>5000+</h1>
                <p className='text-[#6D737A]'>لورم ایپسوم</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={achievement}
          className='order-first md:order-last m-auto md:mr-0'
        />
      </div>
    </div>
  )
}

export default Achievement
