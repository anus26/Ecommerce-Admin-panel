import React from 'react'
import { CgAdd } from 'react-icons/cg'
import { IoAdd } from 'react-icons/io5'
import Analyticsgraph from '../../Components/Analytics/Anaylticsgraph'

const Analytics = () => {
  return (
 <>
 <section>
  <div className='Analytics '>
    <div className='m-5 flex justify-between gap-5'>
      {/* first 1 */}
      <div className='bg-white border border-gray rounded-xl w-[25%] h-28'>
        <div className='m-5 '>

        <h1 className='text-textt '>Unique Visitors</h1>
      <br />
         <div className='flex items-center justify-between '>
          <h1 className='font-bold text-2xl'>24.7k</h1>
           <span className=" flex text-green bg-dark px-2 py-1 text-xs rounded-full">
          <IoAdd/>20%
          </span>
          <span className='text-textt text-sm'>Vs last month</span>
         </div>
        </div>
      </div>
      {/* 2 */}
       <div className='bg-white border border-gray rounded-xl w-[25%] h-28'>
        <div className='m-5 '>

        <h1 className='text-textt '>Unique Visitors</h1>
      <br />
         <div className='flex items-center justify-between '>
          <h1 className='font-bold text-2xl'>24.7k</h1>
           <span className=" flex text-green bg-dark px-2 py-1 text-xs rounded-full">
          <IoAdd/>20%
          </span>
          <span className='text-textt text-sm'>Vs last month</span>
         </div>
        </div>
      </div>
{/*3 */}
 <div className='bg-white border border-gray rounded-xl w-[25%] h-28'>
        <div className='m-5 '>

        <h1 className='text-textt '>Unique Visitors</h1>
      <br />
         <div className='flex items-center justify-between '>
          <h1 className='font-bold text-2xl'>24.7k</h1>
           <span className=" flex text-green bg-dark px-2 py-1 text-xs rounded-full">
          <IoAdd/>20%
          </span>
          <span className='text-textt text-sm'>Vs last month</span>
         </div>
        </div>
      </div>
      {/* 4 */}
      <div className='bg-white border border-gray rounded-xl w-[25%] h-28'>
        <div className='m-5 '>

        <h1 className='text-textt '>Unique Visitors</h1>
      <br />
         <div className='flex items-center justify-between '>
          <h1 className='font-bold text-2xl'>24.7k</h1>
           <span className=" flex text-green bg-dark px-2 py-1 text-xs rounded-full">
          <IoAdd/>20%
          </span>
          <span className='text-textt text-sm'>Vs last month</span>
         </div>
        </div>
      </div>
    </div>
  <div>
    <div>
      <Analyticsgraph/>
    </div>
  </div>
  </div>
 </section>
 </>
  )
}

export default Analytics