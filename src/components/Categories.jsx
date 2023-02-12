import React from 'react'
import CategoryCard from './CategoryCard'
import { BsVectorPen } from 'react-icons/bs'
import { TiHtml5 } from 'react-icons/ti'
import { TbMicrophone2, TbMusic } from 'react-icons/tb'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { WiSunrise } from 'react-icons/wi'
import { AiOutlineCamera } from 'react-icons/ai'
import { BiData } from 'react-icons/bi'
import { MdAttachMoney } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'

const Categories = () => {
  return (
    <div className='max-w-full mx-auto bg-[#E9F8F3] py-24 px-3'>
      <div className='m-auto xl:container'>
        {/* <h1 className='md:leading-[72px] text-3xl font-bold'>
          Most <span className='text-[#209CEE]'>Popular Categories</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Various versions have evolved over the years, sometimes by accident.
        </p> */}

        <h1 className='py-3 text-3xl font-bold text-center'>
          <span className='text-[#209CEE]'>لورم ایپسوم</span>
        </h1>
        <p className='text-[#6D737A] text-center leading-9'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-12 gap-4'>
          <CategoryCard icons={<BsVectorPen size={30} />} title={'لورم ایپسوم'} />
          <CategoryCard icons={<TiHtml5 size={30} />} title={'لورم ایپسوم'} />
          <CategoryCard
            icons={<TbMicrophone2 size={30} />}
            title={'لورم ایپسوم'}
          />
          <CategoryCard
            icons={<HiOutlineBriefcase size={30} />}
            title={'لورم ایپسوم'}
          />

          <CategoryCard icons={<WiSunrise size={30} />} title={'لورم ایپسوم'} />
          <CategoryCard
            icons={<AiOutlineCamera size={30} />}
            title={'لورم ایپسوم'}
          />
          <CategoryCard icons={<TbMusic size={30} />} title={'لورم ایپسوم'} />
          <CategoryCard icons={<BiData size={30} />} title={'لورم ایپسوم'} />
          {/* 
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Personal Develop'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Health & Fitness'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Finance'} />
                    <CategoryCard icons={<FaUniversity size={30} />} title={'Teaching'} /> */}
        </div>
      </div>
    </div>
  )
}

export default Categories
