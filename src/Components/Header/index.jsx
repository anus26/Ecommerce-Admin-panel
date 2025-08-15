import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
const Header = () => {
  return (
<>
<section>
  <nav className='nav bg-white border-4  border-slate-50 '>
    <div className='flex justify-between  m-5 '>
      <div className='flex  gap-5'>

      <div>
        <button className='w-12 border-2 h-12  rounded-lg  '>
            <FaBarsStaggered className='m-2 ' />
        </button>
      </div> 
      <div className='border-2 w-96  h-12 rounded-lg flex  gap-2  '>

      <CiSearch  className='flex items-start m-2 text-2xl '/>
      <input type="text"  placeholder='Search or Type Command....' className= ' outline-none w-96'/>
      </div>
      </div>
      <div className='gap-2 flex'>
        <button className='border-2 rounded-full p-3'><IoMoonOutline className='text-2xl' /></button>
         <button className='border-2 rounded-full p-3'><CiBellOn  className='text-2xl' /></button>
      </div>
    </div>
    

  </nav> 

</section>
</>
  )
}

export default Header