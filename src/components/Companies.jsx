import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4  } from '../assets';

const Companies = () => {
  return (
    <div className='max-w-full lg:container mx-auto bg-white  py-[50px] px-3'>
        <div className='m-auto'>
            <h1 className='text-center text-2xl font-bold text-[#536E96] leading-relaxed'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
            <p className='text-center  text-[#536E96] text-xl leading-9'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            <div className='flex justify-center py-8 md:gap-8 flex-wrap gap-4'>
                <img src={companyLogo1} />
                <img src={companyLogo2} />
                <img src={companyLogo3} />
                <img src={companyLogo4} />
            </div>
        
        </div>

    </div>
  )
}

export default Companies