import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

const Layouts= () => {

  return (
   <>

  <div className='w-[22%]  outline-none bg-gray fixed     md:hidden lg:hidden sm:hidden xl:block '>

<Sidebar />
  </div>

  <div className='part-2    xl:w-[78%] lg:w-full md:w-full sm:w-full   xl:ml-[22%] lg:ml-[0%]  md:ml-[0%] sm:ml-[0%] flex flex-col bg-gray1 '>


  <div className='  lg:h-[60px]  bg-white fixed z-10  '  >

<Header/> 
  </div>


<div className={`flex-1 mt-[80px] p-4 bg-gray3 `}>

    <Outlet/>
</div>



</div>

   </> 
  )
}

export default Layouts