import React, { useContext, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import './Style.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../Context/AppContext';
axios.defaults.withCredentials = true;
const Signin = () => {
  const {user,setUser}=useContext(AppContext)
  const [open , setOpen]=useState(false)
   const [formData, setFormData] = useState({
   
      email: "",
      password:"",
    
    });
    const navigate=useNavigate()
      const handlechange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
 const handleclick=async(e)=>{
    e.preventDefault()
try {
  
  const res=await axios.post('http://localhost:5000/api/v1/user/signin',formData,{
 withCredentials:true})
    console.log("Signin successful", res.data);

    // Check if user is already saved from signup
 localStorage.setItem('user',JSON.stringify(res.data.user))

 
  console.log('Signin successfully', res.data);
  setUser(res.data.user)
  navigate('/')
  
} catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
}

    


  }
  return (
    <>
<section className='flex flex-col lg:flex-row h-screen  '>
  <div className='lg:w-[70%] sm:w-full xl:w-[50%]'>
    <div className='m-28  sm:m-10 md:m-20'>
    <Link to='/' className='text-gray-50 mb-3 gap-2 flex items-center'><IoIosArrowBack  className=' h-5 '/>Back to dashboard</Link>
      <h1 className=' font-semibold text-4xl '>Sign In </h1>
      <p className='mt-3'>Enter your email and password to sign in</p>
<div className="flex lg:flex-row gap-5  md:flex-row sm:flex-col">

        <button className="bg-gray1 border flex gap-3 text-center justify-center items-center  lg:w-[40%]  sm:w-full h-12 rounded-lg  outline-none border-none hover:bg-gray cursor-pointer transition-all duration-300"><FcGoogle className='text-2xl'/> Sign in With Goolge</button>
        <button className="bg-gray1 border flex gap-3 text-center justify-center items-center  lg:w-[40%] sm:w-full h-12 rounded-lg  outline-none border-none hover:bg-gray cursor-pointer transition-all duration-300"><RiTwitterXLine className='text-2xl' />Sign in  with X </button>

      </div>

<div className="flex items-center my-6">
  <div className="flex-1 border-b border-gray"></div>
  <span className="px-3 text-gray font-medium ">Or</span>
  <div className="flex-1 border-b border-gray"></div>
</div>

<div>
  <form onSubmit={handleclick} >
   <div>
    <h1 className='font-semibold flex'>Email <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
    <input type="email" placeholder='info@gmail.com'name='email' value={formData.email} onChange={handlechange} className='border w-[100%] hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg'/>
   </div> 
   <div className='mt-5 '>
    <h1 className='font-semibold flex'>Password <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
    <input type={open?"text":"password"} name='password' value={formData.password} onChange={handlechange} placeholder='Enter your password'  className='relative border w-[100%]  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg '   />
  <span onClick={()=>setOpen(!open)} className='absolute lg:ml-[-2%] sm:ml-[-8%] z-10 text-center  mt-3'>
      {open &&
      <BsEyeSlash /> ||   <BsEye />
    
    }
  </span>
  <div className='mt-4 flex justify-between'>
    <div>

<input type="checkbox"  /> keep me logged in
    </div>
<p className='text-primary  font-semibold'>Forget password?</p>
  </div>
   </div> 
   <button type='submit' className='flex justify-center  items-center text-center border mt-10 w-[100%] h-[12%] p-3 rounded-lg bg-primary text-white duration-300 transition-all hover:bg-hower'>
    Sign In
   </button>
   <p className='mt-5'>Don't have any accoout? <Link to='/signup' className='text-primary font-semibold'>Sign Up</Link></p>

  </form>

</div>


    </div>
  </div>
<div className='w-[50%] md:hidden xl:block'>
<div className="  back h-screen  xl:flex items-center justify-center   md:hidden sm:hidden  lg:hidden
                ">
  <img src="./images/control-panel.png" alt="control" className='w-[12%]'  />
  <h1 className="text-white text-4xl font-bold  ">AdminPanel</h1>
</div>

</div>

</section>
    </>
  )
}

export default Signin