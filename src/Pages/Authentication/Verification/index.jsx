import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import './Style.css'
const Verification = () => {
  const [open , setOpen]=useState(false)
  return (
    <>
<section className='flex h-screen outline-none overflow-hidden '>
  <div className='w-[50%]'>
    <div className='m-28'>
    <h1 className='text-gray-50 mb-3 gap-2 flex items-center'><IoIosArrowBack  className=' h-5 '/>Back to dashboard</h1>
      <h1 className=' font-semibold text-4xl '>Two Step Verification </h1>
      <p className='mt-3'>A verification code has been sent to your mobile. Please enter it in the field below.</p>
    

<div className="flex items-center my-6">
  <div className="flex-1 border-b border-gray"></div>
  <span className="px-3 text-gray font-medium ">Or</span>
  <div className="flex-1 border-b border-gray"></div>
</div>

<div> 
  <form >
 <h1 className='font-semibold'>Type your 6 digits security code</h1>
 <div className='flex gap-7'>
  <input type="text"  className='w-16 border h-12 rounded-lg border-gray outline-none text-center hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] duration-300 transition-all'/>
   <input type="text"  className='w-16 border h-12 rounded-lg border-gray outline-none text-center hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] duration-300 transition-all'/>
  <input type="text"  className='w-16 border h-12 rounded-lg border-gray outline-none text-center hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] duration-300 transition-all'/>
     <input type="text"  className='w-16 border h-12 rounded-lg border-gray outline-none text-center hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] duration-300 transition-all'/>
  <input type="text"  className='w-16 border h-12 rounded-lg border-gray outline-none text-center hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] duration-300 transition-all'/> 
    <input type="text"  className='w-16 border h-12 rounded-lg border-gray outline-none text-center hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] duration-300 transition-all'/>



 </div>

  
   <button className='flex font-semibold justify-center  items-center text-center border mt-10 w-[100%] h-[12%] p-3 rounded-lg bg-primary text-white duration-300 transition-all hover:bg-hower'>
  Verify My Account
   </button>
   <h1 className='mt-5'>Didn't get the code? <span className='text-primary'>Resend</span></h1>

  </form>

</div>


    </div>
  </div>
<div className='w-[50%]'>
<div className="  back h-screen  flex items-center justify-center 
                ">
  <img src="./images/control-panel.png" alt="control" className='w-[12%]'  />
  <h1 className="text-white text-4xl font-bold  ">AdminPanel</h1>
</div>

</div>

</section>
    </>
  )
}

export default Verification