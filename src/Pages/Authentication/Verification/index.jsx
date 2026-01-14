import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import './style.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Verification = () => {
   const [email, setEmail] = useState("");
  const [otp , setOtp]=useState(new Array(6).fill(""))
const navigate=useNavigate()



  const handleotpchange=(e,index)=>{
    const  value=e.target.value.replace(/[^0-9]/g, "")
    if (value) {
      const newOtp=[...otp]
      newOtp[index]=value
      setOtp(newOtp)
      
    }
  if (index < 5) {
    document.getElementById(`otp-${index+1}`).focus()
    
  }
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
      const finalOtp = otp.join("");
    try {
      const user=JSON.parse(localStorage.getItem("user"))
      const res=await axios.post("https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/user/verif",
        {
        email:user.email,
       otp:finalOtp
      },
      { withCredentials:true}
    )
      console.log("OTP Verify",res.data);
      navigate('/signin')
      
    } catch (error) {
      console.error("OTP Expired:",error.res?.data || error.message);
      
    }
  }


    const handle=async(e)=>{
      e.preventDefault()
      try {
        const user=JSON.parse(localStorage.getItem("user"))
        console.log(user);
        const res=await axios.post(`http://localhost:5000/api/v1/user/forget`,{email:user.email},{
          withCredentials:true
        })
        
  console.log("OTP Send Successfully",res.data);
  
      } catch (error) {
        console.error("OTP Error:",error.res?.data || error.messages);
        
      }
    }
  return (
    <>
<section className='flex h-screen '>
  <div className='xl:w-[50%] lg:w-[100%] '>
    <div className='m-5 md:m-10 lg:m-20 xl:m-28'>
    <Link to='/' className='text-gray-50 mb-3 gap-2 flex items-center'><IoIosArrowBack  className=' h-5 '/>Back to dashboard</Link>
      <h1 className=' font-semibold text-4xl '>Two Step Verification </h1>
      <p className='mt-3'>A verification code has been sent to your mobile. Please enter it in the field below.</p>
    

<div className="flex items-center my-6">
  <div className="flex-1 border-b border-gray"></div>
  <span className="px-3 text-gray font-medium ">Or</span>
  <div className="flex-1 border-b border-gray"></div>
</div>

<div> 
  <form onSubmit={handleSubmit}>
 <h1 className='font-semibold'>Type your 6 digits security code</h1>
 {/* <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}   /> */}
 <div className='flex gap-7'>
  {otp.map((digit,i)=>(
    <input 
    type="text" 
    key={i}
    maxLength={1}
    value={digit}
    onChange={(e)=>handleotpchange(e,i)}
    className='w-16 border h-12 rounded-lg border-gray outline-none text-center hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] duration-300 transition-all'
    />
  ))}




 </div>

  
   <button type='submit' className='flex font-semibold justify-center  items-center text-center border mt-10 w-[100%] h-[12%] p-3 rounded-lg bg-primary text-white duration-300 transition-all hover:bg-hower'>
  Verify My Account
   </button>

  </form>
   <button onClick={handle} className='mt-5'>Didn't get the code? <span className='text-primary'>Resend</span></button>

</div>


    </div>
  </div>
<div className='w-[50%]'>
<div className="  back h-screen    sm:hidden xl:flex items-center justify-center  
                ">
  <img src="/images/control-panel.png" alt="control" className='w-[12%] xl:hidden lg:block'  />
  <h1 className="text-white text-4xl font-bold  ">AdminPanel</h1>
</div>

</div>

</section>
    </>
  )
}

export default Verification