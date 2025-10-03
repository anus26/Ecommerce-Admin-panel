import React, { useState } from 'react'
import { FaBarsStaggered, FaBedPulse } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import Sidebar from '../Sidebar';
import { RiDeleteBack2Line } from "react-icons/ri";
const Header = () => {
  const [sidebar,setSidebar]=useState(false)
  const [close,setclose]=useState(true)
  const handleclick=()=>{
   setSidebar(prev=>!prev)
 
  }

  return (
<>
<section >
  <nav className='nav bg-white border-4  border-slate-50    '>
    <div className='flex justify-between  m-5   '>
      <div className='flex  gap-5 '>

      <div>
        <button className={`w-12 border-2 h-12 border-gray rounded-lg lg:hidden   `} onClick={handleclick} >
         

          
          { sidebar
         ? <h1 className='lg:hidden ' > <RiDeleteBack2Line  /></h1>
          :<FaBarsStaggered className="m-2 text-black  "   /> 
                  }
        
            
          
          

          
        </button>
        {/* <div className=" md:hidden ">
   
   <Sidebar />
   </div> */}

    
      </div> 
      <div className='border-2 border-gray w-96   h-12 rounded-lg flex  gap-2  '>

      <CiSearch  className='flex items-start m-2 text-2xl '/>
      <input type="text"  placeholder='Search or Type Command....' className= ' outline-none w-96'/>
      </div>
      </div>
      <div className='gap-2 flex'>
        <button className='border-2 border-gray rounded-full p-3'><IoMoonOutline className='text-2xl' /></button>
         <button className='border-2 border-gray rounded-full p-3'><CiBellOn  className='text-2xl' /></button>
      </div>
    </div>
    <div className='border-b'></div>

  </nav> 

</section>





{sidebar && (
<div className='relative z-10 '>
{/* <div className='fixed inset-0 '> */}
  
  
  
  
  <div  className=" lg:hidden md:block  md:w-[30%] fixed inset-5 " >
   <Sidebar   />
 </div>


{/* </div> */}
</div>


)}
</>
  )
}

export default Header