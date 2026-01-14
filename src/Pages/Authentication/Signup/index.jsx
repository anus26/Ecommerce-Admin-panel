import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import "./Style.css"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
axios.defaults.withCredentials=true //allow  cookies  globaly
const Signup = () => {
  const [open , setOpen]=useState(false)
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
    position:"",
      lastname:"",
            Telephone:"",
            City:"",
            Country:"",
            Postcode:"",
            image:null
  });
  const navigate=useNavigate()
  const handlechange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleimage=(e)=>{
    setFormData({...formData,image:e.target.files[0]})
  }
  const handleclick=async(e)=>{
    e.preventDefault()
    const data = new FormData();
      Object.keys(formData).forEach((key) => {
    data.append(key, formData[key]);
  });

try {
  
  const res=await axios.post('https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/user/signup',formData,{
     headers: { "Content-Type": "multipart/form-data" },
 withCredentials:true})
 localStorage.setItem('user',JSON.stringify(res.data.user))

  console.log('Signup successfully', res.data.user);
  navigate('/')
  
} catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
}

    


  }
  return (
    <>
<section className='flex flex-col lg:flex-row h-screen outline-none  '>
  <div className='lg:w-[70%] sm:w-full xl:w-[50%]'>
    <div className='m-28  sm:m-10 md:m-20 '>
    <Link to='/' className='text-gray-50 mb-3 gap-2 flex items-center'><IoIosArrowBack  className=' h-5 '/>Back to dashboard</Link>
      <h1 className=' font-semibold text-4xl '>Sign Up </h1>
      <p className='mt-3'>Enter your email and password to sign Up!</p>
      <div className='flex lg:flex-row gap-5  md:flex-row sm:flex-col '>
        <button className="bg-gray1 border flex gap-3 text-center justify-center items-center  lg:w-[40%] sm:w-full h-12 rounded-lg  outline-none border-none hover:bg-gray cursor-pointer transition-all duration-300"><FcGoogle className='text-2xl'/> Sign in With Goolge</button>
        <button className="bg-gray1 border flex gap-3 text-center justify-center items-center   lg:w-[40%] sm:w-full w-[40%]  h-12 rounded-lg  outline-none border-none hover:bg-gray cursor-pointer transition-all duration-300"><RiTwitterXLine className='text-2xl' />Sign in  with X </button>

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
      <div className='flex gap-2'>

   <div>
    
      <h1 className='flex font-semibold '>First Name  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
      <input type="text" onChange={handlechange} placeholder='Enteryoufirstname' value={formData.firstname} name='firstname' className='w-[100%] border  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />
   </div>
   <div>

         
               <h1 className='flex font-semibold '>last Name  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
      <input type="text" onChange={handlechange} placeholder='Enteryoufirstname' value={formData.lastname} name='lastname' className='w-[100%] border  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />
   </div>
   
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
  <span onClick={()=>setOpen(!open)} className='absolute lg:ml-[-2%] sm:ml-[-8%] z-10 text-center  mt-3'>
      {open &&
      <BsEyeSlash /> ||   <BsEye />
    
    }
  </span>
      <div>

      <h1 className='flex font-semibold '>Confirm password  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
      <input type="text" onChange={handlechange}     name="confirmpassword" 
              value={formData.confirmpassword}  placeholder='confirm password'  className='w-[100%] border value hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />
        <span onClick={()=>setOpen(!open)}  className='absolute lg:ml-[-2%] sm:ml-[-8%]  z-10 text-center  mt-3'>
      {open &&
      <BsEyeSlash /> ||   <BsEye />
    
    }
  </span>
      </div>
            <div className='flex gap-2'>

   
    <div>
      <h1 className='flex font-semibold '>Position  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
      <input type="text" onChange={handlechange} placeholder='Enteryoufirstname' value={formData.position} name='position' className='w-[100%] border  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />

    </div>
   
   

         <div>

               <h1 className='flex font-semibold '>Telephone  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
<PhoneInput
    country={formData.Country ? formData.Country : undefined}             // default country code
  value={formData.Telephone}
  onChange={(value) =>
    setFormData({ ...formData, Telephone: value })
  }
  placeholder="Enter your phone number"
  className="w-full border hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg"
/>
         </div>
   
   
      </div>
                  <div className='flex gap-2'>

   
    {/* <div>
      <h1 className='flex font-semibold '>Country  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
      <input type="text" onChange={handlechange} placeholder='Enteryoufirstname' value={formData.City} name='City' className='w-[100%] border  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />

    </div> */}
   
   

         <div>

               <h1 className='flex font-semibold '>City  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
      <input type="text" onChange={handlechange} placeholder='Enteryoufirstname' value={formData.Country} name='Country' className='w-[100%] border  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />
         </div>
   
   
      </div>
      <div className='flex'>
        
           <div>

               <h1 className='flex font-semibold '>Postcode  <img src="./images/star.png" alt="email-star" className='w-[2%] h-[2%]' /></h1>
      <input type="number" onChange={handlechange} placeholder='Enteryoufirstname' value={formData.Postcode} name='Postcode' className='w-[100%] border  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />
         </div>
         <div>
        <input type='file' onChange={handleimage}   name='image'/>
         </div>
      </div>

  <div className='mt-4 flex justify-between'>
    <div>

<input type="checkbox"  /> By creating an account means you agree to the <span>Term and Conditions,</span> and our Privacy Policy
    </div>

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
<div className='w-[50%] md:hidden xl:block'>
<div className="  back h-screen  xl:flex items-center justify-center text-center  md:hidden sm:hidden  lg:hidden
                ">
  <img src="/images/control-panel.png" alt="control" className='w-[12%]  '  />
  <h1 className="text-white text-4xl font-bold  ">AdminPanel</h1>
</div>

</div>

</section>
    </>
  )
}

export default Signup