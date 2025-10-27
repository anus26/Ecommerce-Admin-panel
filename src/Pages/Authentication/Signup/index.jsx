import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import './Style.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
axios.defaults.withCredentials=true //allow  cookies  globaly
const Signup = () => {
  const [open , setOpen]=useState(false)
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  const handlechange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleclick=async(e)=>{
    e.preventDefault()
try {
  
  const res=await axios.post('http://localhost:5000/api/v1/user/signup',formData,{
 withCredentials:true})
 localStorage.setItem('user',JSON.stringify(res.data.user))

  console.log('Signup successfully', res.data.user);
  
} catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
}

    


  }
  return (
    <>
<section className='flex h-screen outline-none  '>
  <div className='w-[50%]'>
    <div className='m-28'>
    <Link to='/' className='text-gray-50 mb-3 gap-2 flex items-center'><IoIosArrowBack  className=' h-5 '/>Back to dashboard</Link>
      <h1 className=' font-semibold text-4xl '>Sign Up </h1>
      <p className='mt-3'>Enter your email and password to sign Up!</p>
      <div className='flex mt-10 gap-5   '>
        <button className="bg-gray1 border flex gap-3 text-center justify-center items-center w-[40%] h-12 rounded-lg  outline-none border-none hover:bg-gray cursor-pointer transition-all duration-300"><FcGoogle className='text-2xl'/> Sign in With Goolge</button>
        <button className="bg-gray1 border flex gap-3 text-center justify-center items-center w-[40%] h-12 rounded-lg  outline-none border-none hover:bg-gray cursor-pointer transition-all duration-300"><RiTwitterXLine className='text-2xl' />Sign in  with X </button>

      </div>

<div className="flex items-center my-6">
  <div className="flex-1 border-b border-gray"></div>
  <span className="px-3 text-gray font-medium ">Or</span>
  <div className="flex-1 border-b border-gray"></div>
</div>

<div>
  <form onSubmit={handleclick}>
   <div>
    <div className='flex justify-between gap-5'>
      <div>

      <h1 className='flex font-semibold '>First Name  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
      <input type="text" onChange={handlechange} placeholder='Enteryoufirstname' value={formData.fullname} name='fullname' className='w-[100%] border  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />
      </div>
    </div>
    <h1 className='font-semibold flex'>Email <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
    <input type="email" onChange={handlechange} placeholder='info@gmail.com'  name="email" 
              value={formData.email}  className='border w-[100%] hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg'/>
   </div> 
   <div className='mt-5 '>
    <h1 className='font-semibold flex'>Password <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
    <input type={open?"text":"password"} onChange={handlechange}  name="password" 
                value={formData.password}  placeholder='Enter your password'  className='relative border w-[100%]  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg '   />
  <span onClick={()=>setOpen(!open)} className='absolute ml-[-2%] z-10 text-center  mt-3'>
      {open &&
      <BsEyeSlash /> ||   <BsEye />
    
    }
  </span>
      <div>

      <h1 className='flex font-semibold '>Confirm password  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
      <input type="text" onChange={handlechange}     name="confirmpassword" 
              value={formData.confirmpassword}  placeholder='confirm password'  className='w-[100%] border value hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />
        <span onClick={()=>setOpen(!open)}  className='absolute ml-[-2%] z-10 text-center  mt-3'>
      {open &&
      <BsEyeSlash /> ||   <BsEye />
    
    }
  </span>
      </div>
  <div className='mt-4 flex justify-between'>
    <div>

<input type="checkbox"  /> By creating an account means you agree to the <span>Term and Conditions,</span> and our Privacy Policy
    </div>
<p className='text-primary  font-semibold'>Forget password?</p>
  </div>
   </div> 
   <button type='submit' className='flex justify-center  items-center text-center border mt-10 w-[100%] h-[12%] p-3 rounded-lg bg-primary text-white duration-300 transition-all hover:bg-hower'>
    Sign Up
   </button>
   <p className='mt-5'>Already have anaccount? <Link to="/signin" className='text-primary font-semibold'>Sign In</Link></p>

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

export default Signup