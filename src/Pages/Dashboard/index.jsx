import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Header from '../../Components/Header'
import "./style.css"
import { FiUsers } from "react-icons/fi"
import { IoIosArrowRoundUp } from "react-icons/io";
import { PiDotsThreeVertical } from "react-icons/pi";
import Apexchart from '../../Components/Apexchart';
import Monthly from '../../Components/Monthly';
import Static from '../../Components/Static';
import Global from '../../Components/Global';
import Orders from '../../Components/Orders';
import axios from 'axios';
const  Dashboard = () => {
  const [open,setOpen]=useState(false)
  const [coustomers,setCoustomer]=useState([])

  const handle=async()=>{
    try {
      const res=await axios.get("http://localhost:5000/api/v1/coust/get")
      console.log("Data", res.data.coustomer);
      setCoustomer(res.data.coustomer)
    } catch (error) {
      console.error(error.Message);
     
    }
  }
  useEffect(()=>{
handle()
  },[])
const menuItems=[
  { id:'Viewmore'},
  {id:'Delte'}
]
  return (
<>
<section className="dashboard bg-gray3 min-h-screen w-full " >
<div className='bg-gray-50 m-5 flex gap-10 md:flex  sm:flex-wrap   '>
  {/* 1 */}
<div className='border border-gray  xl:w-72 lg:w-96 md:w-80  sm:w-full bg-white rounded-2xl h-52'>
<div className='border-4 border-gray rounded-xl w-12 h-12    bg-gray-200 m-5 '>

<FiUsers className=' h-5  w-10 m-1' />
</div>
<h1 className='text-gray-400 font-bold m-4'>Customers</h1>
<div className='flex justify-between m-3'>
{coustomers.map((item,index)=>(
  <div key={item._id ||index}>
<span className='text-3xl font-bold'>{item.Total}</span>

  </div>
))}
  <button className='flex border rounded-full w-20 text-center items-center p-1 h-8 bg-dark text-green '><IoIosArrowRoundUp className='w-12 h-6' /><span>11.01%</span></button>

</div>

</div>
{/* 2 */}
<div className='border border-gray   xl:w-72 lg:w-96 md:w-80  sm:w-full  bg-white rounded-2xl h-52 '>
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


<div className='Apexchart xl:w-[40%] lg:w-[100%] md:w-[90%]  sm:w-full xl:h-52 lg:h-[40] sm:h-[30] border border-gray rounded-lg'>



<Apexchart />


</div>
</div>
{/* Monthly */}
  <div className='border border-gray xl:w-[52%] lg:w-[95%] md:w-[95%] sm:w-[95%]  bg-white m-5 rounded-xl  mt-1'>
  <Monthly/>
  </div>
  <div className='' >
    <Static/>
  </div>

<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5 '>
  <Global/>


  <Orders/>
</div>

<br /> <br />
</section>
</>
  )
}

export default Dashboard