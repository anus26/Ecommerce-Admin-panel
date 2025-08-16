import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

const Layouts= () => {
  return (
   <>
     <div className='flex  justify-between'>

  <div className='w-[20%] bg-gray-200 fixed h-full'>

<Sidebar />
  </div>
  <div className='w-[80%] ml-[20%] flex flex-col bg-gray-50'>


  <div className=' w-[80%] h-[60px] bg-white shadow fixed  z-10'>

<Header/> 
  </div>
<div className='flex-1 mt-[80px] p-4 '>
    <Outlet/>
</div>
  </div>
  </div> 
   </> 
  )
}

export default Layouts