import React, { useState } from 'react'
import { PiSquaresFourLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { ImPacman } from 'react-icons/im';
import { IoIosArrowUp } from "react-icons/io";
import { TbPhoneIncoming } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineTask } from "react-icons/md";
import { SiFormspree } from "react-icons/si";
import { SiInstructables } from "react-icons/si";
import { RiPageSeparator } from "react-icons/ri";
import { SiWebauthn } from "react-icons/si";
import { FiShoppingCart } from "react-icons/fi";
import { BsCalendar2Check } from "react-icons/bs";
import './Style.css'
import { CiFolderOn } from 'react-icons/ci';
const Sidebar = () => {
    const [open ,setOpen]=useState(false)
    const [open2 ,setOpen2]=useState(false)
    const [open3 ,setOpen3]=useState(false)
    const [open4 ,setOpen4]=useState(false)
    const [open5 ,setOpen5]=useState(false)
    const [open6 ,setOpen6]=useState(false)
    const [open7 ,setOpen7]=useState(false)
    const [authentication,setAuthentication]=useState(false)

    const [activemenu ,setActiveMenu ]=useState(null)
    const handleopen=()=>{
        setOpen(prev=>!prev)
        setActiveMenu("dashboard")
    } 
        const handleopen2=()=>{
        setOpen2(prev=>!prev)
        setActiveMenu("ai assitant")
    } 
           const handleopen3=()=>{
        setOpen3(prev=>!prev)
        setActiveMenu("ecommerce")
    } 
               const handleopen4=()=>{
        setOpen4(prev=>!prev)
        setActiveMenu("tasks")
    } 
               const handleopen5=()=>{
        setOpen5(prev=>!prev)
        setActiveMenu("forms")
    } 
                   const handleopen6=()=>{
        setOpen6(prev=>!prev)
        setActiveMenu("tables")
    } 
                       const handleopen7=()=>{
        setOpen7(prev=>!prev)
        setActiveMenu("pages")
    }
    const handleauth=()=>{
      setAuthentication(prev=>!prev)
      setActiveMenu('authentication')
    } 
    

  return (
<>
<section>
    <div className='sidebar  bg-white   border-r-4 border-gray h-screen flex flex-col '>
        {/* header */}
<div className='sticky  top-0 bg-white z-10'>
    <h1 className='m-5 font-semibold text-2xl flex gap-1 items-center '><img src="./images/control-panel.png" alt="dashboard"  className='w-10'/>Ecommerce Admin</h1>
{/* border */}
<div className='border-b-2 border-gray'></div>
</div>
{/* menu */}
    <div className=' flex-1 overflow-y-auto  scroll-hidden'>
        <h1 className='text-gray '>MENU</h1>
        {/* dashboard */}
        <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'dashboard' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen}
>

        <h1 className='flex gap-1 text-md items-center'><span className='text-3xl '><PiSquaresFourLight   className='text-line'/></span> Dashboard
    
         </h1>
           <span className='text-2xl ' >{open?<IoIosArrowUp className='text-line' />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
   { open && (
       <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >
   <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>eCommerce</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Analytics</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Marketing</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>CRM</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Stocks</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2 flex justify-between  transition-all duration-300 rounded-lg'>Saas <span className='text-green bg-dark p-2 text-sm rounded-full'>NEW</span></h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2 flex justify-between  transition-all duration-300 rounded-lg'>Logistcs <span className='text-green bg-dark p-2 text-sm rounded-full'>NEW</span></h1>
          </div>
        )}
        </div>
        {/* Ai Assitant */}
         <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'ai assitant' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen2}
>

        <h1 className='flex gap-1 text-md font-sans items-center justify-between '><span className='text-2xl'><TbPhoneIncoming  className='text-line'/></span> AI Assitant<span className='text-green  bg-dark p-1.5 text-sm rounded-full gap-2'>NEW</span>
    
         </h1>
           <span className='text-2xl ' >{open2?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
   { open2 && (
       <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >
   <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Text Generator</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Image Generator</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Code Generator</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Video Generator</h1>

          </div>
        )}
        </div>
        {/* Ecommerce */}
         <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'ecommerce' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen3}
>

        <h1 className='flex gap-1 text-md font-sans items-center justify-between '><span className='text-2xl'><FiShoppingCart className='text-line' /></span>  E-commerce<span className='text-green  bg-dark p-1.5 text-sm rounded-full '>NEW</span>
    
         </h1>
           <span className='text-2xl ' >{open3?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
   { open3 && (
       <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >

            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Products</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Add Product</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Billing</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Invoices</h1>
            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Single Invoices</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Create Invoice</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Transactions</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Singel Transactions</h1>

          </div>
        )}
        </div>
        {/* calendar */}
        <div className='m-5'>

               <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'Calendar' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
    `}
    
>

        <h1 className='flex gap-1 text-md font-sans items-center justify-between '><span className='text-2xl'><BsCalendar2Check className='text-line'/></span> Calendar
    
         </h1>
         
  </div>
</div>
{/* user profile */}
        <div className='m-5'>

               <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'Profile' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
    `}
    
>

        <h1 className='flex gap-1 text-md font-sans items-center justify-between '><span className='text-2xl'><CgProfile  className='text-line' /></span> User Profile
    
         </h1>
         
  </div>
</div>
{/* Task */}
   <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'tasks' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen4}
>

        <h1 className='flex gap-1 text-md font-sans items-center justify-between '><span className='text-2xl'><MdOutlineTask  className='text-line'/></span>  Tasks
    
         </h1>
           <span className='text-2xl ' >{open4?<IoIosArrowUp className='text-line' />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
   { open4 && (
       <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >

            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Products</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Add Product</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Billing</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Invoices</h1>
            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Single Invoices</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Create Invoice</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Transactions</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Singel Transactions</h1>

          </div>
        )}
        </div>
        {/* Forms */}
           <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'forms' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen5}
>

        <h1 className='flex gap-1 text-md font-sans items-center justify-between '><span className='text-2xl'><CiFolderOn className='text-line' />
</span>  Forms
    
         </h1>
           <span className='text-2xl ' >{open5?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line'  />}</span>
</div>
{/* drowdown */}
   { open5 && (
       <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >

            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Products</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Add Product</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Billing</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Invoices</h1>
            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Single Invoices</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Create Invoice</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Transactions</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Singel Transactions</h1>

          </div>
        )}
        </div>

        {/* tables */}
           <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'tables' ? 'bg-light  text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen6}
>

        <h1 className='flex gap-1 text-md font-sans items-center justify-between '><span className='text-2xl'><SiInstructables  className='text-line'/></span>  Tables
    
         </h1>
           <span className='text-2xl ' >{open6?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
   { open6 && (
       <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >

            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Products</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Add Product</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Billing</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Invoices</h1>
            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Single Invoices</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Create Invoice</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Transactions</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Singel Transactions</h1>

          </div>
        )}
        </div>
        {/* pages */}
           <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'page' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen7}
>

        <h1 className='flex gap-1 text-md font-sans items-center justify-between '><span className='text-2xl'><RiPageSeparator  className='text-line'/></span> Pages
    
         </h1>
           <span className='text-2xl ' >{open7?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown  className='text-line' />}</span>
</div>
{/* drowdown */}
   { open7 && (
       <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >

            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Products</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Add Product</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Billing</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Invoices</h1>
            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Single Invoices</h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Create Invoice</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Transactions</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Singel Transactions</h1>

          </div>
        )}
        </div>
        {/* other */}
        <h1>Ohter</h1>
        {/* authenticationn */}
                   <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'authentication' ? 'bg-light text-primary' : 'text-black hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleauth}
>

        <h1 className='flex gap-1 text-md font-sans items-center justify-between '><span className='text-2xl'><SiWebauthn  className='text-line' /></span> Authentication
    
         </h1>
           <span className='text-2xl ' >{authentication?<IoIosArrowUp  className='text-line'  />:<IoIosArrowDown  className='text-line' />}</span>
</div>
{/* drowdown */}
   { authentication && (
       <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >

            <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Sign in </h1>
    <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Sign up</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Resent Password</h1>
         <h1 className='hover:bg-slate-50 font-semibold p-2  transition-all duration-300 rounded-lg'>Two way Verificatio</h1>



          </div>
        )}
        </div>

        </div>
    </div>
</section>
</>
  )
}

export default Sidebar