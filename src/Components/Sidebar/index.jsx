import React, { useContext, useState } from 'react'
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
import { AppContext } from '../../Context/AppContext';
const Sidebar = () => {
    


   
  
    const [activemenu ,setActiveMenu ]=useState(null)
    const [active,setActive]=useState(null)
    const [openmenu,setOpenMenus]=useState({
     dashboard:false,
     aiassitant:false,
     ecommerce:false,
     tasks:false,
     forms:false,
     tables:false,
     pages:false,
     authentication:false
    })


    const togglemenu=(menuname)=>{
      setOpenMenus(prev=>({
        ...prev,
        [menuname]:!prev[menuname],
      }))
      setActiveMenu(menuname)
    }
    
  return (
<>
<section>
     
    <div className="sidebar bg-white  border-r-2  h-screen  border-gray  flex flex-col font-poppins  " >
        {/* header */}

<div className='sticky  top-0 bg-white z-10 '>

    <h1 className='m-5 font-semibold text-2xl  gap-1 items-center sm:hidden xl:flex  '><img src="./images/control-panel.png" alt="dashboard"  className='w-10  '/>Ecommerce Admin</h1>
   
   

  
{/* border */}
<div className=' border-gray'></div>
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
  onClick={()=>togglemenu("dashboard")}
>

        <h1 className='flex gap-1 text-md 
         font-bold items-center'><span className='text-3xl '><PiSquaresFourLight    className={`text-line ${activemenu==="dashboard"?"text-primary ":"text-textt hover:text-primary"}`}/></span> Dashboard
    
         </h1>
           <span className='text-2xl ' >{openmenu.dashboard?<IoIosArrowUp className='text-line' />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
   {openmenu.dashboard && (
  <div className="ml-8 mt-2 space-y-1 text-gray-black">
    {[
      { name: "eCommerce", path: "/" },
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
     
         <div className='m-5  '>

       <div
  className={`Dashboard flex justify-between items-center cursor-pointer transition-all duration-300 p-2 rounded-lg 
    ${activemenu === 'aiassitant' ? 'bg-light text-primary' : 'text-textt hover:bg-slate-100 hover:text-primary'}
  `}
  onClick={()=>togglemenu("aiassitant")}
>


        <h1 className='flex gap-1 text-md font-bold items-center  '><span className='text-2xl'>
          <TbPhoneIncoming  className={`text-line  ${activemenu==="aiassitant"?"text-primary ":"text-textt hover:text-primary"}`}/>
    
          </span> AI Assitant
         </h1>
          <span className='text-green    bg-dark p-1.5 text-xs font-small rounded-xl'>NEW</span>

           <span className='text-2xl ' >{openmenu.aiassitant?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
 {openmenu.aiassitant && (
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
  onClick={()=>togglemenu("ecommerce")}
>


        <h1 className='flex gap-1 text-md font-bold   '><span className='text-2xl'><FiShoppingCart className='text-line  ' />
        </span>  E-commerce 
    
         </h1>
        <span className='text-green  bg-dark p-1.5 text-xs rounded-xl font-small  '>NEW</span>

           <span className='text-2xl ' >{openmenu.ecommerce?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line' />}</span>
{/* drowdown */}


</div>
{openmenu.ecommerce&&(
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
  onClick={()=>togglemenu("tasks")}
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
    {openmenu.tasks ? <IoIosArrowUp /> : <IoIosArrowDown />}
  </span>
</div>

{/* drowdown */}
 
        {openmenu.tasks && (
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
  onClick={()=>togglemenu("forms")}
>
     <h1 className='flex gap-1 text-md font-bold items-center justify-between '><span className='text-2xl'>
          <CiFolderOn    className={`text-line ${activemenu==="forms"?"text-primary ":"text-textt hover:text-primary"}`}/></span> Forms
    
         </h1>

        
           <span className='text-2xl ' >{openmenu.forms?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line'  />}</span>
</div>
{/* drowdown */}
        {openmenu.forms && (
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
  onClick={()=>togglemenu("tables")}
>
  
  

        <h1 className='flex gap-1 text-md   font-bold items-center justify-between '>
          <span className='text-2xl'>
            <SiInstructables    className={`text-line
               ${activemenu==="tables"?"text-primary ":"text-textt hover:text-primary"}`}/></span>  Tables
    
         </h1>
           <span className='text-2xl ' >{openmenu.tables?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown className='text-line' />}</span>
</div>
{/* drowdown */}
        {openmenu.tables && (
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
  onClick={()=>togglemenu("pages")}
>

        <h1 className='flex gap-1 text-md font-bold items-center justify-between '><span className='text-2xl'>
          <RiPageSeparator    className={`text-line ${activemenu==="pages"?"text-primary ":"text-textt hover:text-primary"}`}/></span> Pages
    
         </h1>
           <span className='text-2xl ' >{openmenu.pages?<IoIosArrowUp className='text-line'  />:<IoIosArrowDown  className='text-line' />}</span>
</div>
{/* drowdown */}
        {openmenu.pages && (
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
  onClick={()=>togglemenu("authentication")}
>

        <h1 className='flex gap-1 text-md font-bold items-center justify-between '><span className='text-2xl'><SiWebauthn    className={`text-line ${activemenu==="authentication"?"text-primary ":"text-textt hover:text-primary"}`} /></span> Authentication
    
         </h1>
           <span className='text-2xl ' >{openmenu.authentication?<IoIosArrowUp  className='text-line'  />:<IoIosArrowDown  className='text-line' />}</span>
</div>
{/* drowdown */}
        {openmenu.authentication && (
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
