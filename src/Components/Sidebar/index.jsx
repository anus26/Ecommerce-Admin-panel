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
import Product from '../Products';
import { Link } from 'react-router-dom';
import { RiDeleteBack2Line } from "react-icons/ri";
import { FaBarsStaggered } from 'react-icons/fa6';
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
    const [active,setActive]=useState(null)
 
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
     
    <div className="sidebar bg-white  border-r-2  border-gray h-screen flex flex-col   " >
        {/* header */}

<div className='sticky  top-0 bg-white z-10 '>

    <h1 className='m-5 font-semibold text-2xl flex gap-1 items-center '><img src="./images/control-panel.png" alt="dashboard"  className='w-10 '/>Ecommerce Admin</h1>
   
   

  
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
    ${activemenu === 'dashboard' ? 'bg-light text-primary' : 'text-textt hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen}
>

        <h1 className='flex gap-1 text-md 
         font-bold items-center'><span className='text-3xl '><PiSquaresFourLight    className={`text-line ${activemenu==="dashboard"?"text-primary ":"text-textt hover:text-primary"}`}/></span> Dashboard
    
         </h1>
           <span className='text-2xl ' >{open?<IoIosArrowUp className='text-line' />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
   {open && (
  <div className="ml-8 mt-2 space-y-1 text-gray-black">
    {[
      { name: "eCommerce", path: "/ecommerce" },
      { name: "Analytics", path: "/analytics" },
      { name: "Marketing", path: "/marketing" },
      { name: "CRM", path: "/crm" },
      { name: "Stocks", path: "/stocks" },
      { name: "Saas", path: "/saas", isNew: true },
      { name: "Logistics", path: "/logistics", isNew: true },
    ].map((item) => (
      <h1
        key={item.name}
        className={`font-semibold p-2 transition-all duration-300 rounded-lg cursor-pointer flex justify-between items-center ${
          active === item.name
            ? "bg-light text-primary font-bold"
            : "text-black hover:bg-slate-100 hover:text-black"
        }`}
        onClick={() => setActive(item.name)}
      >
        <Link to={item.path}>{item.name}</Link>
        {item.isNew && (
          <span className="text-green bg-dark px-2 py-1 text-xs rounded-full">
            NEW
          </span>
        )}
      </h1>
    ))}
  </div>
)}

        </div>
        {/* Ai Assitant */}
         <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'ai assitant' ? 'bg-light text-primary' : 'text-textt hover:bg-slate-100 hover:text-primary'}
  `}
  onClick={handleopen2}
>

        <h1 className='flex gap-1 text-md font-bold items-center justify-between '><span className='text-2xl'>
          <TbPhoneIncoming  className={`text-line ${activemenu==="ai assitant"?"text-primary ":"text-textt hover:text-primary"}`}/></span> AI Assitant<span className='text-green  bg-dark p-1.5 text-sm rounded-full gap-2'>NEW</span>
    
         </h1>
           <span className='text-2xl ' >{open2?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
 {open2 && (
  <div className='ml-8 mt-2 space-y-1 text-gray-black'>
    {[
      { name: "Text Generator", path: "/text-generator" },
      { name: "Image Generator", path: "/image-generator" },
      { name: "Code Generator", path: "/code-generator" },
      { name: "Video Generator", path: "/video-generator" },
    ].map((item) => (
      <h1
        key={item.name}
        className={`font-semibold p-2 transition-all duration-300 rounded-lg cursor-pointer ${
          active === item.name
            ? "bg-light text-primary font-bold"
            : "text-black hover:bg-slate-100 hover:text-black"
        }`}
        onClick={() => setActive(item.name)}
      >
        <Link to={item.path}>{item.name}</Link>
      </h1>
    ))}
  </div>
)}

        </div>
        {/* Ecommerce */}
         <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'ecommerce' ? 'bg-light text-primary ' : 'text-textt hover:bg-slate-100 hover:text-primary'}
    `}
  onClick={handleopen3}
>

        <h1 className='flex gap-1 text-md font-bold  items-center justify-between '><span className='text-2xl'><FiShoppingCart className='text-line  ' />
        </span>  E-commerce<span className='text-green  bg-dark p-1.5 text-sm rounded-full '>NEW</span>
    
         </h1>
           <span className='text-2xl ' >{open3?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line' />}</span>
{/* drowdown */}


</div>
{open3&&(
      <div className=' ml-8 mt-2 space-y-1 text-gray-black  ' >
        {[    { name: "Product", path: "/addProduct" },
      { name: "NewProduct", path: "/Product" },
      { name: "Billing", path: "/billing" },
      { name: "Invoice", path: "/invoices" },
      { name: "Single Invoice", path: "/invoice" },
      { name: "Create Invoice", path: "/createinvoice" },
      { name: "Transactions", path: "/transactions" },
      { name: "Single Transactions", path: "/singletransactions" },].map((item)=>(
              <h1
        key={item.name}
        className={`font-semibold p-2 transition-all duration-300 rounded-lg cursor-pointer ${
          active === item.name
            ? "bg-light text-primary"
            : "text-black hover:bg-slate-100 hover:text-black"
        }`}
        onClick={() => setActive(item.name)}
      >
        <Link to={item.path}>{item.name}</Link>
      </h1>
      )
      )}
      </div>
)}
 
        </div>
        {/* calendar */}
        <div className='m-5'>

               <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'Calendar' ?'bg-light text-primary ' : 'text-textt hover:bg-slate-100 hover:text-primary'}
    `}
    
>
  <div className='flex items-center gap-2'>

          <span className='text-2xl'><BsCalendar2Check   className={`text-line ${activemenu==="Calendar"?"text-primary ":"text-textt hover:text-primary"}`}/></span>

        <h1 className='font-bold text-textt '>
    Clander
         </h1>
  </div>
         
  </div>
</div>
{/* user profile */}
        <div className='m-5'>

               <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'Profile' ? 'bg-light text-primary ' : 'text-textt hover:bg-slate-100 hover:text-primary'}
    `}
    
>

        <h1 className='flex gap-1 text-md font-bold text-textt items-center justify-between '><span className='text-2xl'><CgProfile  className={`text-line ${activemenu==="Profile"?"text-primary ":"text-textt hover:text-primary"}`}/></span> User Profile
    
         </h1>
         
  </div>
</div>
{/* Task */}
   <div className='m-5'>

 <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'tasks'
      ? 'bg-light text-primary'
      : 'text-textt hover:bg-slate-100 hover:text-primary'}
  `}
  onClick={handleopen4}
>
  <div className="flex items-center gap-2">
    <MdOutlineTask
      className={`text-2xl transition-colors duration-300 ${
        activemenu === 'tasks' ? 'text-primary' : 'text-textt group-hover:text-primary'
      }`}
    />
    <h1 className="text-md font-bold">
      Tasks
    </h1>
  </div>

  <span className="text-2xl text-line">
    {open4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
  </span>
</div>

{/* drowdown */}
 
        {open4 && (
  <div className="ml-8 mt-2 space-y-1 text-gray-black">
    {[
      { name: "Products", path: "/products" },
      { name: "Add Product", path: "/addProduct" },
      { name: "Billing", path: "/billing" },
      { name: "Invoices", path: "/invoices" },
      { name: "Single Invoices", path: "/invoice" },
      { name: "Create Invoice", path: "/createinvoice" },
      { name: "Transactions", path: "/transactions" },
      { name: "Single Transactions", path: "/singletransactions" },
    ].map((item) => (
      <h1
        key={item.name}
        className={`font-semibold p-2 transition-all duration-300 rounded-lg cursor-pointer ${
          active === item.name
            ? "bg-light text-primary font-bold"
            : "text-black hover:bg-slate-100 hover:text-black"
        }`}
        onClick={() => setActive(item.name)}
      >
        <Link to={item.path}>{item.name}</Link>
      </h1>
    ))}
  </div>
)}

        </div>
        {/* Forms */}
           <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'forms' ? 'bg-light text-primary' : 'text-textt hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen5}
>
     <h1 className='flex gap-1 text-md font-bold items-center justify-between '><span className='text-2xl'>
          <CiFolderOn    className={`text-line ${activemenu==="forms"?"text-primary ":"text-textt hover:text-primary"}`}/></span> Forms
    
         </h1>

        
           <span className='text-2xl ' >{open5?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line'  />}</span>
</div>
{/* drowdown */}
        {open5 && (
  <div className="ml-8 mt-2 space-y-1 text-gray-black">
    {[
      { name: "Products", path: "/products" },
      { name: "Add Product", path: "/addProduct" },
      { name: "Billing", path: "/billing" },
      { name: "Invoices", path: "/invoices" },
      { name: "Single Invoices", path: "/invoice" },
      { name: "Create Invoice", path: "/createinvoice" },
      { name: "Transactions", path: "/transactions" },
      { name: "Single Transactions", path: "/singletransactions" },
    ].map((item) => (
      <h1
        key={item.name}
        className={`font-semibold p-2 transition-all duration-300 rounded-lg cursor-pointer ${
          active === item.name
            ? "bg-light text-primary font-bold"
            : "text-black hover:bg-slate-100 hover:text-black"
        }`}
        onClick={() => setActive(item.name)}
      >
        <Link to={item.path}>{item.name}</Link>
      </h1>
    ))}
  </div>
)}

        </div>

        {/* tables */}
           <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'tables' ? 'bg-light  text-primary' : 'text-textt hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleopen6}
>
  
  

        <h1 className='flex gap-1 text-md   font-bold items-center justify-between '>
          <span className='text-2xl'>
            <SiInstructables    className={`text-line
               ${activemenu==="tables"?"text-primary ":"text-textt hover:text-primary"}`}/></span>  Tables
    
         </h1>
           <span className='text-2xl ' >{open6?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
        {open6 && (
  <div className="ml-8 mt-2 space-y-1 text-gray-black">
    {[
      { name: "Products", path: "/products" },
      { name: "Add Product", path: "/addProduct" },
      { name: "Billing", path: "/billing" },
      { name: "Invoices", path: "/invoices" },
      { name: "Single Invoices", path: "/invoice" },
      { name: "Create Invoice", path: "/createinvoice" },
      { name: "Transactions", path: "/transactions" },
      { name: "Single Transactions", path: "/singletransactions" },
    ].map((item) => (
      <h1
        key={item.name}
        className={`font-semibold p-2 transition-all duration-300 rounded-lg cursor-pointer ${
          active === item.name
            ? "bg-light text-primary font-bold"
            : "text-black hover:bg-slate-100 hover:text-black"
        }`}
        onClick={() => setActive(item.name)}
      >
        <Link to={item.path}>{item.name}</Link>
      </h1>
    ))}
  </div>
)}

        </div>
        {/* pages */}
           <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'pages' ? 'bg-light text-primary' : 'text-textt hover:bg-slate-100 hover:text-black'}
    `}
  onClick={handleopen7}
>

        <h1 className='flex gap-1 text-md font-bold items-center justify-between '><span className='text-2xl'>
          <RiPageSeparator    className={`text-line ${activemenu==="pages"?"text-primary ":"text-textt hover:text-primary"}`}/></span> Pages
    
         </h1>
           <span className='text-2xl ' >{open7?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown  className='text-line' />}</span>
</div>
{/* drowdown */}
        {open7 && (
  <div className="ml-8 mt-2 space-y-1 text-gray-black">
    {[
      { name: "Products", path: "/products" },
      { name: "Add Product", path: "/addProduct" },
      { name: "Billing", path: "/billing" },
      { name: "Invoices", path: "/invoices" },
      { name: "Single Invoices", path: "/invoice" },
      { name: "Create Invoice", path: "/createinvoice" },
      { name: "Transactions", path: "/transactions" },
      { name: "Single Transactions", path: "/singletransactions" },
    ].map((item) => (
      <h1
        key={item.name}
        className={`font-semibold p-2 transition-all duration-300 rounded-lg cursor-pointer ${
          active === item.name
            ? "bg-light text-primary font-bold"
            : "text-black hover:bg-slate-100 hover:text-black"
        }`}
        onClick={() => setActive(item.name)}
      >
        <Link to={item.path}>{item.name}</Link>
      </h1>
    ))}
  </div>
)}


        </div>
        {/* other */}
        <h1>Ohter</h1>
        {/* authenticationn */}
                   <div className='m-5'>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg
    ${activemenu === 'authentication' ? 'bg-light text-primary' : 'text-textt hover:bg-slate-100 hover:text-black'}
  `}
  onClick={handleauth}
>

        <h1 className='flex gap-1 text-md font-bold items-center justify-between '><span className='text-2xl'><SiWebauthn    className={`text-line ${activemenu==="authentication"?"text-primary ":"text-textt hover:text-primary"}`} /></span> Authentication
    
         </h1>
           <span className='text-2xl ' >{authentication?<IoIosArrowUp  className='text-line'  />:<IoIosArrowDown  className='text-line' />}</span>
</div>
{/* drowdown */}
        {authentication && (
  <div className="ml-8 mt-2 space-y-1 text-gray-black">
    {[
      { name: "Sig in", path: "/signin" },
      { name: "Sign up", path: "/signup" },
      { name: "Resent Password", path: "/verification" },
      { name: "Two way Verification", path: "/reset" },
    
    ].map((item) => (
      <h1
        key={item.name}
        className={`font-semibold p-2 transition-all duration-300 rounded-lg cursor-pointer ${
          active === item.name
            ? "bg-light text-primary font-bold"
            : "text-black hover:bg-slate-100 hover:text-black"
        }`}
        onClick={() => setActive(item.name)}
      >
        <Link to={item.path}>{item.name}</Link>
      </h1>
    ))}
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
