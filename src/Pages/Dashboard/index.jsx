import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Header from '../../Components/Header'
import { FiUsers } from "react-icons/fi"
import { IoIosArrowRoundUp } from "react-icons/io";
import { PiDotsThreeVertical } from "react-icons/pi";
import Apexchart from '../../Components/Apexchart';
const  Dashboard = () => {
  const [open,setOpen]=useState(false)
  
const menuItems=[
  { id:'Viewmore'},
  {id:'Delte'}
]
  return (
<>
<section>
<div className='bg-gray-50 m-10 flex gap-10'>
  {/* 1 */}
<div className='border  w-72  bg-white rounded-2xl h-52'>
<div className='border-4 rounded-xl w-12 h-12    bg-gray-200 m-5 '>

<FiUsers className=' h-5  w-10 m-1' />
</div>
<h1 className='text-gray-400 font-bold m-4'>Customers</h1>
<div className='flex justify-between m-3'>
  <span className='text-3xl font-bold'>3,782</span>
  <button className='flex border rounded-full w-20 text-center items-center p-1 h-8 bg-dark text-green '><IoIosArrowRoundUp className='w-12 h-6' /><span>11.01%</span></button>

</div>

</div>
{/* 2 */}
<div className='border  w-72  bg-white rounded-2xl h-52'>
<div className='border-4 rounded-xl w-12 h-12    bg-gray-200 m-5 '>

<FiUsers className=' h-5  w-10 m-1' />
</div>
<h1 className='text-gray-400 font-bold m-4'>Customers</h1>
<div className='flex justify-between m-3'>
  <span className='text-3xl font-bold'>3,782</span>
  <button className='flex border rounded-full w-20 text-center items-center p-1 h-8 bg-dark text-green '><IoIosArrowRoundUp className='w-12 h-6' /><span>11.01%</span></button>

</div>

</div>
{/* 3 */}
<div className='w-96 h-52'>
  <div className='bg-white  border  '>
{/* top */}
    <div className='flex justify-between m-4 '>
   <h1 className='text-xl font-semibold'>Mothly Target</h1>
   <div className='relative  mr-0  ml-0'>
<PiDotsThreeVertical  onClick={()=>setOpen(!open)} />
{open && (
<div className='absolute bg-white w-32 h-20 right-0 top-0 m-4 border rounded-xl ml-0'>

  
  {menuItems.map((item)=>(
    <div  key={item.id} className='m-2 font-lg '>
      {item.id}
      </div>
      
    ))}
    </div>
)}

   </div>
   <div></div>
    </div>
{/* second */}
<div>
  <h1>Target you've set for each month</h1>
  <div className='chart'>
<Apexchart/>
  </div>
</div>
  </div>

</div>

</div>


  
</section>
</>
  )
}

export default Dashboard