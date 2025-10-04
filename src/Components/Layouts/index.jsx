import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

const Layouts= () => {

  return (
   <>

  <div className='w-[20%]  outline-none bg-gray fixed h-full  md:hidden lg:block'>

<Sidebar />
  </div>

  <div className='part-2 lg:w-[80%] md:w-full    lg:ml-[20%]  md:ml-[0%] flex flex-col bg-gray1 '>


  <div className=' w-full   h-[60px] bg-white fixed z-10  '  >

<Header/> 
  </div>


<div className={`flex-1 mt-[80px] p-4 bg-gray3   `}>

    <Outlet/>
</div>



</div>

   </> 
  )
}

export default Layouts