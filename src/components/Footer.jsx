import React from 'react'
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mx-auto bg-[#E9F8F3] py-24 pb-2 px-3 dir-rtl mt-40'>
      <div className='m-auto xl:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='flex flex-col items-center'>
          {/* <img src={logo} className='h-[25px]' /> */}
          <h3 className='text-2xl font-bold mt-4'>تماس با ما</h3>
          <span className='py-2 text-[#6D737A]'>
            ش تماس : <span className='dir-ltr'>+۹۸-۱۲۳-۴۵۶۷۸۹۱</span>
          </span>
          <span className='py-2 text-[#6D737A] leading-9 text-center'>
            آدرس : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </span>
          <span className='py-2 text-[#363A3D] text-center'>پست الکترونیکی : example@mail.com</span>
          <div className='flex gap-1 sm:gap-2 md:gap-4 flex-wrap justify-center py-4'>
            <div className='p-4 bg-[#E9F8F3] rounded-xl'>
              <FaFacebookF size={25} style={{ color: '#209CEE' }} />
            </div>
            <div className='p-4 bg-[#E9F8F3] rounded-xl'>
              <FaDribbble size={25} style={{ color: '#209CEE' }} />
            </div>
            <div className='p-4 bg-[#E9F8F3] rounded-xl'>
              <FaLinkedinIn size={25} style={{ color: '#209CEE' }} />
            </div>
            <div className='p-4 bg-[#E9F8F3] rounded-xl'>
              <FaInstagram size={25} style={{ color: '#209CEE' }} />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center text-center'>
          <h3 className='text-2xl font-bold'>صفحات</h3>
          <ul className='py-6 text-[#6D737A]'>
            <li className='py-2'>خانه</li>
            <li className='py-2'>درباره ما</li>
            <li className='py-2'>بلاگ</li>
            <li className='py-2'>قیمت ها</li>
          </ul>
        </div>

        <div className='flex flex-col items-center text-center'>
          <h3 className='text-2xl font-bold'>لینک های مفید</h3>
          <ul className='py-6 text-[#6D737A]'>
            <li className='py-2'>حریم خصوصی</li>
            <li className='py-2'>سؤالات پر تکرار</li>
            <li className='py-2'>محصولات</li>
            <li className='py-2'>کادر آموزشی</li>
          </ul>
        </div>

        <div className='order-first text-center'>
          <h3 className='text-2xl font-bold text-center md:text-right'>
            خبرنامه
          </h3>
          <span className='py-2 text-[#6D737A] leading-9'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 
          </span>
          <form className='py-4'>
            <input
              className='bg-[#fcfbfb] p-4 w-full rounded'
              placeholder='پست الکترونیکی'
            />
            <button className='w-full my-4 px-5 py-3 rounded-md bg-[#209CEE] text-white font-medium'>
              ثبت
            </button>
          </form>
        </div>
      </div>
      <div className='w-full py-3 !pt-0 mt-28 text-center'>Copyright &copy; 2023, All Rights Reserved</div>
    </div>
  )
}

export default Footer
