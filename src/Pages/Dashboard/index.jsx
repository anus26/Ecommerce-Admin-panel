import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Header from '../../Components/Header'
import { FiUsers } from "react-icons/fi"
import { IoIosArrowRoundUp } from "react-icons/io";
import { PiDotsThreeVertical } from "react-icons/pi";
import Apexchart from '../../Components/Apexchart';
import Monthly from '../../Components/Monthly';
import Static from '../../Components/Static';
import Global from '../../Components/Global';
import Orders from '../../Components/Orders';
const  Dashboard = () => {
  const [open,setOpen]=useState(false)
  
const menuItems=[
  { id:'Viewmore'},
  {id:'Delte'}
]
  return (
<>
<section className="dashboard bg-gray1 min-h-screen w-full " >
<div className='bg-gray-50 m-10 flex gap-10'>
  {/* 1 */}
<div className='border border-gray  w-72  bg-white rounded-2xl h-52'>
<div className='border-4 border-gray rounded-xl w-12 h-12    bg-gray-200 m-5 '>

<FiUsers className=' h-5  w-10 m-1' />
</div>
<h1 className='text-gray-400 font-bold m-4'>Customers</h1>
<div className='flex justify-between m-3'>
  <span className='text-3xl font-bold'>3,782</span>
  <button className='flex border rounded-full w-20 text-center items-center p-1 h-8 bg-dark text-green '><IoIosArrowRoundUp className='w-12 h-6' /><span>11.01%</span></button>

</div>

</div>
{/* 2 */}
<div className='border border-gray  w-72  bg-white rounded-2xl h-52'>
<div className='border-4 border-gray rounded-xl w-12 h-12    bg-gray-200 m-5 '>

<FiUsers className=' h-5  w-10 m-1' />
</div>
<h1 className='text-gray-400 font-bold m-4'>Customers</h1>
<div className='flex justify-between m-3'>
  <span className='text-3xl font-bold'>3,782</span>
  <button className='flex border rounded-full w-20 text-center items-center p-1 h-8 bg-dark text-green '><IoIosArrowRoundUp className='w-12 h-6' /><span>11.01%</span></button>

</div>

</div>
 
{/* 3 */}


<div className='Apexchart w-96 h-52  border border-gray rounded-lg'>



<Apexchart />


</div>
</div>
{/* Monthly */}
  <div className='border border-gray w-[50%] bg-white m-10 rounded-xl  mt-1'>
  <Monthly/>
  </div>
  <div>
    <Static/>
  </div>

<div className='flex '>
  <Global/>


  <Orders/>
</div>
<br /> <br />
</section>
</>
  )
}

export default Dashboard