import React, { useEffect, useState } from 'react'
import './Style.css';

import { FiUsers } from "react-icons/fi"
import { IoIosArrowRoundUp } from "react-icons/io";
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
      const res=await axios.get("https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/coust/get")
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
<div className='bg-gray-50 m-5  grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
  {/* 1 */}
<div className="grid grid-cols-1 md:grid-cols-1 gap-5 w-full ">
<div className='grid grid-cols-1 md:grid-cols-2 gap-5 col-span-2 '>

<div className='border border-gray   bg-white rounded-2xl h-52'>
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
<div className='border border-gray     bg-white rounded-2xl h-52 '>
<div className='border-4 border-gray rounded-xl w-12 h-12    bg-gray-200 m-5 '>

<FiUsers className=' h-5  w-10 m-1' />
</div>
<h1 className='text-gray-400 font-bold m-4'>Customers</h1>
<div className='flex justify-between m-3'>
  <span className='text-3xl font-bold'>3,782</span>
  <button className='flex border rounded-full w-20 text-center items-center p-1 h-8 bg-dark text-green '><IoIosArrowRoundUp className='w-12 h-6' /><span>11.01%</span></button>

</div>


</div> 
</div>
<div className='border border-gray col-span-2   bg-white  rounded-xl  '>
  <Monthly/>
  </div>
 
</div>
{/* 3 */}


<div className='Apexchart    border border-gray rounded-lg'>



<Apexchart />


</div>
 
  </div>
{/* Monthly */}
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