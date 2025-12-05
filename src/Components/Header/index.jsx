import React, { useContext, useState } from 'react'
import { FaBarsStaggered, FaBedPulse } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import Sidebar from '../Sidebar';
import { RiDeleteBack2Line } from "react-icons/ri";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { AppContext } from '../../Context/AppContext';
import {IoIosArrowDown, IoMdLogOut }  from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Profile from '../Account/Profile';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [sidebar,setSidebar]=useState(false)
  const [close,setclose]=useState(true)
  const [open,setopen]=useState(false)
  const {header,setHeader,logout,user,form,filter,search,setSearch,filteritems,sidebarItems}=useContext(AppContext)
  const navigate=useNavigate()
  

  const handleclick=()=>{
   setHeader(prev=>!prev)
 
  }
  

if(header){
  document.body.classList.add("overflow-hidden")
}else{
  document.body.classList.remove("overflow-hidden")
}
const handle=(e)=>{
  const value = e.target.value;  
 setSearch(value)
 
     const match = sidebarItems.find(
 (item) => item.name.toLowerCase() ===value.toLowerCase()
);

if (match) {
 navigate(match.path);
 setSearch("")
}
};
return (
  <>
<section >
  <nav className={`nav bg-white  border-b-2 px-4 xl:w-[78%] lg:w-[100%] md:w-[100%] sm:w-[100%] border-gray fixed top-0   z-50 `}>

    <div className={`flex justify-between  m-5  `}>
      <div className='flex  gap-5 '>

      <div>
        <button className='w-12 text-2xl h-12 border-gray rounded-lg xl:hidden    ' onClick={handleclick} >
         

          
          {header
         ? <h1 className='xl:hidden ' > <RiDeleteBack2Line  /></h1>
          :<HiBars3CenterLeft className="m-2 text-black  "   /> 
                  }
        
            
          
          

          
        </button>
        {/* <div className=" md:hidden ">
   
   <Sidebar />
   </div> */}

    
      </div> 
      <div className='border-2 border-gray w-96  h-12 rounded-lg xl:flex  sm:hidden gap-2    '  >

      <CiSearch  className='xl:flex items-start m-2 text-2xl  sm:hidden '/>
      <input type="text"  placeholder='Search or Type Command....'  value={search}      onChange={(handle)} className= "  border flex gap-3 text-center justify-center items-center   h-10 rounded-lg  outline-none border-none  cursor-pointer transition-all duration-300"/>
      </div>
      </div>
      <div className='gap-2 flex  sm:hidden'>
        <button className='border-2 border-gray rounded-full p-3'><IoMoonOutline className='text-2xl' /></button>
         <button className='border-2 border-gray rounded-full p-3'><CiBellOn  className='text-2xl' /></button>
      </div>
      <div>
      
<div className="relative flex items-center gap-3">

  {/* User Image */}
  <img 
    src={user.imageUrl} 
    alt="profile"  
    className='w-12 h-12 rounded-full object-cover xl:block sm:hidden'
  />

  {/* User Name */}
  <h1 className='text-lg font-semibold xl:block sm:hidden'>{user.firstname}</h1>

  {/* Toggle Button */}
  <button 
    onClick={() => setopen(prev => !prev)} 
    className="bg-white  px-3 py-2 rounded-lg shadow-sm flex items-center"
  >
    {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
  </button>

  {/* Dropdown Box */}
  {open && (
    <div className="absolute right-20 top-14  rounded-lg p-3 z-50 w-48 ">
      <Profile />
    </div>
  )}
</div>





      </div>
    </div>

  </nav> 

</section>




{header && (
  <>
<div className='fixed inset-0  bg-black/50  z-40' onClick={handleclick}>


  
  
 </div>
  
  
      <div
        className="
        fixed  top-[100px]
        h-[calc(100vh-94px)]
    
          md:w-[300px]
          sm:w-[400px]
          shadow-lg z-50 
          overflow-y-auto
          bg-white 
          xl:hidden
        "
        onClick={(e) => e.stopPropagation()}
      >
   <Sidebar  />


</div>

</>

)}
</>
  )
}

export default Header