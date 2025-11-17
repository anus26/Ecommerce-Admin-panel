import React, { useContext, useState } from 'react'
import { FaBarsStaggered, FaBedPulse } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import Sidebar from '../Sidebar';
import { RiDeleteBack2Line } from "react-icons/ri";
import { AppContext } from '../../Context/AppContext';
const Header = () => {
  const [sidebar,setSidebar]=useState(false)
  const [close,setclose]=useState(true)
  const {header,setHeader}=useContext(AppContext)
  const handleclick=()=>{
   setHeader(prev=>!prev)
 
  }
if(header){
  document.body.classList.add("overflow-hidden")
}else{
  document.body.classList.remove("overflow-hidden")
}
  return (
<>
<section >
  <nav className={`nav bg-white border-4 px-4 xl:w-[80%] lg:w-[100%] md:w-[100%] sm:w-[100%] border-slate-50 fixed top-0   z-50 `}>
    <div className={`flex justify-between  m-5  `}>
      <div className='flex  gap-5 '>

      <div>
        <button className='w-12 border-2 h-12 border-gray rounded-lg xl:hidden    ' onClick={handleclick} >
         

          
          {header
         ? <h1 className='xl:hidden ' > <RiDeleteBack2Line  /></h1>
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
      <div className='gap-2 flex  sm:hidden'>
        <button className='border-2 border-gray rounded-full p-3'><IoMoonOutline className='text-2xl' /></button>
         <button className='border-2 border-gray rounded-full p-3'><CiBellOn  className='text-2xl' /></button>
      </div>
    </div>
    <div className='border-b-2 border-gray '></div>

  </nav> 

</section>




{header && (
  <>
<div className='fixed inset-0  bg-black/50  z-40' onClick={handleclick}>


  
  
 </div>
  
  
  <div  className=" fixed top-[94px]  left-0  h-[calc(100%-94px)]   shadow-lg z-50 overflow-y-auto xl:hidden lg:block md:block sm:block md:w-[30%] sm:w-[60%]  bg-white "  onClick={(e)=>e.stopPropagation()} >
   <Sidebar  />


</div>

</>

)}
</>
  )
}

export default Header