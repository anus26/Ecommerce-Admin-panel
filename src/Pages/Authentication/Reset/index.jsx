import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import './Style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Reset = () => {
  const [open , setOpen]=useState(false)
  const [form ,setForm]=useState({email:""})
  const navigate=useNavigate()
  const handlechange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post(`http://localhost:5000/api/v1/user/forget`,form,{
        withCredentials:true
      })
console.log("OTP Send Successfully",res.data);
navigate("/verification")

    } catch (error) {
      console.error("OTP Error:",error.res?.data || error.messages);
      
    }
  }

  return (
    <>
<section className='flex h-screen  '>
  <div className='xl:w-[50%] lg:w-[100%]'>
    <div className='m-28'>
    <h1 className='text-gray-50 mb-3 gap-2 flex items-center'><IoIosArrowBack  className=' h-5 '/>Back to dashboard</h1>
      <h1 className=' font-semibold text-4xl '>Forgot Your Password?
 </h1>
      <p className='mt-3'>Enter the email address linked to your account, and we’ll send you a link to reset your password.

</p>
    



<div className='mt-5'> 
  <form onSubmit={handleSubmit}>
 <div className=''>

        <h1 className='font-semibold flex'>Email <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
    <input type="email" placeholder='info@gmail.com' onChange={handlechange} name='email' value={form.email} className='border w-[100%] hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg'/>




 </div>

  
   <button type='submit' className='flex font-semibold justify-center  items-center text-center border mt-10 w-[100%] h-[12%] p-3 rounded-lg bg-primary text-white duration-300 transition-all hover:bg-hower'>
Send Your Link
   </button>
   <h1 className='mt-5'>Wait, I remember my password...  <span className='text-primary'>Click here</span></h1>

  </form>

</div>


    </div>
  </div>
<div className='w-[50%]'>
<div className="  back h-screen  flex items-center justify-center xl:block lg:hidden md:hidden sm:hidden
                ">
  <img src="./images/control-panel.png" alt="control" className='w-[12%]'  />
  <h1 className="text-white text-4xl font-bold  ">AdminPanel</h1>
</div>

</div>

</section>
    </>
  )
}

export default Reset