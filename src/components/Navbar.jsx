import React, { useState } from 'react'
import { hamburgerMenu, close } from '../assets'
// import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)

  return (
    <div className='w-full mx-auto h-[80px] bg-[#E9F8F3] z-50 opacity-100 fixed px-3'>
      <div className='w-full xl:container h-full flex justify-between items-center relative mx-auto'>
        <div className='flex'>
          {/* <button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
            <img src={lock} />
            ورود
          </button> */}
          <button className='px-8 py-3 rounded-md bg-[#209CEE] text-white font-bold'>
            ثبت نام
          </button>
        </div>

        {/* <img src={logo} className='h-[30px]' /> */}

        <div className='hidden md:flex items-center '>
          <ul className='flex gap-4'>
            <li>صفحه اصلی</li>
            <li>درباره ما</li>
            <li>بلاگ</li>
            <li>قیمت ها</li>
          </ul>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? 'absolute z-10 p-4  bg-[#e7f5ff] w-full px-8 md:hidden border-b'
            : 'hidden'
        }
      >
        <ul>
          <li className='p-4 hover:bg-[#209CEE] hover:rounded-md hover:text-white text-right'>صفحه اصلی</li>
          <li className='p-4 hover:bg-[#209CEE] hover:rounded-md hover:text-white text-right'>درباره ما</li>
          <li className='p-4 hover:bg-[#209CEE] hover:rounded-md hover:text-white text-right'>بلاگ</li>
          <li className='p-4 hover:bg-[#209CEE] hover:rounded-md hover:text-white text-right'>قیمت ها</li>
          <div className='flex flex-col my-4 gap-4'>
            {/* <button className='border border-[209CEE] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
              <img src={lock} />
              Login
            </button> */}
            {/* <button className='px-8 py-5 rounded-md bg-[#209CEE] text-white font-bold'>
              ثبت نام
            </button> */}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
