import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
const Signin = () => {
  const [open , setOpen]=useState(false)
  return (
    <>
<section>
  <div className='w-[50%]'>
    <div className='m-20'>
      <h1 className=' font-semibold text-4xl '>Sign In </h1>
      <p>Enter your email and password to sign in</p>
      <div className='flex mt-10 gap-5   '>
        <butto className="bg-gray1 border flex gap-3 text-center justify-center items-center w-[36%] h-12 rounded-lg  outline-none border-none hover:bg-gray cursor-pointer transition-all duration-300"><FcGoogle className='text-2xl'/> Sign in With Goolge</butto>
        <button className="bg-gray1 border flex gap-3 text-center justify-center items-center w-[36%] h-12 rounded-lg  outline-none border-none hover:bg-gray cursor-pointer transition-all duration-300"><RiTwitterXLine className='text-2xl' />Sign in  with X </button>

      </div>

<div className="flex items-center my-6">
  <div className="flex-1 border-b border-gray"></div>
  <span className="px-3 text-gray font-medium ">Or</span>
  <div className="flex-1 border-b border-gray"></div>
</div>

<div>
  <form >
   <div>
    <h1 className='font-semibold flex'>Email <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
    <input type="email" placeholder='info@gmail.com'  className='border w-[72%] p-2 border-gray rounded-lg'/>
   </div> 
   <div className='mt-5 '>
    <h1 className='font-semibold flex'>Password <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
    <input type={open?"text":"password"} placeholder='Enter your password'  className='relative border w-[72%] p-2 border-gray rounded-lg '   />
  <span onClick={()=>setOpen(!open)} className='absolute ml-[-2%] z-10 text-center  mt-3'>
      {open &&
      <BsEyeSlash /> ||   <BsEye />
    
    }
  </span>
   </div> 
  </form>
</div>

    </div>
  </div>
</section>
    </>
  )
}

export default Signin