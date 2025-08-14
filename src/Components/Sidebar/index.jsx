import React, { useState } from 'react'
import { PiSquaresFourLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { ImPacman } from 'react-icons/im';
import { IoIosArrowUp } from "react-icons/io";
const Sidebar = () => {
    const [open ,setOpen]=useState(false)
    const [activemenu ,setActiveMenu ]=useState(null)
    const handleopen=()=>{
        setOpen(prev=>!prev)
        setActiveMenu("dashboard")
    } 
  return (
<>
<section>
    <div className='sidebar  bg-white   border-r-4 min-h-screen '>
        {/* header */}
<div>
    <h1 className='m-5 font-semibold text-2xl flex gap-1 items-center '><img src="./images/control-panel.png" alt="dashboard"  className='w-10'/>Ecommerce Admin</h1>
</div>
{/* border */}
<div className='border-b-2'></div>
{/* menu */}
    <div className='mt-2 m-3'>
        <h1 className='text-gray-400'>MENU</h1>
        {/* dashboard */}
        <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2
    ${activemenu === 'dashboard' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen}
>

        <h1 className='flex gap-1 text-lg items-center'><span className='text-3xl '><PiSquaresFourLight /></span> Dashboard
    
         </h1>
           <span className='text-2xl ' >{open?<IoIosArrowUp  />:<IoIosArrowDown />}</span>
</div>
{/* drowdown */}
   { open && (
       <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >
   <h1 className='hover:bg-slate-50 font-semibold p-2 '>eCommerce</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2 '>Analytics</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2 '>Marketing</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2 '>CRM</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2 '>Stocks</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2 '>Saas</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2 '>Logistcs</h1>
          </div>
        )}
        </div>
        </div>
    </div>
</section>
</>
  )
}

export default Sidebar