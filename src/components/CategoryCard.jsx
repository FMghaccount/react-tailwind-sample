import React from 'react'
import { BsVectorPen, BsArrowUpLeft } from 'react-icons/bs'

const CategoryCard = ({ icons, title }) => {
  return (
    <div className='category-card bg-white p-4 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#209CEE] hover:cursor-pointer group/edit dir-rtl'>
      <div className='flex items-center gap-4'>
        {icons}
        <h1 className='text-2xl font-semibold'>{title}</h1>
      </div>

      <div className='group-hover/edit:bg-[#209CEE] rounded-lg p-3'>
        <BsArrowUpLeft
          size={30}
          style={{ color: '#209CEE' }}
          className='arrow-icon'
        />
      </div>
    </div>
  )
}

export default CategoryCard
