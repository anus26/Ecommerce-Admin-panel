import { initOnLoad } from 'apexcharts';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoAddSharp } from "react-icons/io5";
import { LiaFilterSolid } from 'react-icons/lia';
import { TbArrowDownToArc } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const Invoices = () => {
    const [active ,setActive]=useState("overview")
    const [invoice,setInvoice]=useState([])
    const [filtered,setFiltered]=useState([])
    const [currentpage,setCurrentPage]=useState(1)
     
    const perpage=10
    const lastpage=currentpage*perpage
    const firstpage=lastpage-perpage

  const dataToDisplay = filtered.length > 0 ? filtered : invoice;


const currentinvoice = dataToDisplay.slice(firstpage, lastpage);
   const next=()=>{
    if (currentpage <Math.ceil(invoice.length/perpage)) {
      setCurrentPage(prev=>prev+1)
         
    }
  
   }
   const prevpage=()=>{
    if (currentpage > 1) {
        setCurrentPage(prev=>prev-1)
        
    }
 

   }
    
    const fetchData=async()=>{
    try {
      const res=await axios.get('http://localhost:5000/api/v1/getinvoice')
      setInvoice(res.data.invoice)
      console.log('Invoice Data :',res.data.invoice );
      setCurrentPage(1)
    } catch (error) {
        console.error("❌ Fetch Error:", error.message);
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
<>
<section>
  <div>
    <div className='m-5'>
        <h1 className='font-bold text-2xl'>Invoices</h1>
        <div className='border-gray bg-white rounded-lg '>
            <div className='flex justify-between m-5 '>
       

            <h1 className='font-semibold text-lg m-5'>Overview</h1>
             <Link className='bg-primary hover:bg-hower text-white m-5
             font-semibold text-lg flex w-[18%] gap-2 h-[20%] file p-2 
             duration-300 transition-all
             rounded-lg' to="/createinvoice">
             <span ><IoAddSharp className='text-white
             ' /></span>Create an Invoice</Link>
            </div>
             <div className="flex flex-wrap justify-between gap-4 border-2 border-gray rounded-xl p-5 w-[90%] m-5 bg-white shadow-sm">
  {[
    { title: "Over Due", amount: "$120.80" },
    { title: "Paid", amount: "$980.50" },
    { title: "Pending", amount: "$300.00" },
    { title: "Cancelled", amount: "$50.00" },
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center w-[22%] min-w-[180px] border-r-2 last:border-r-0 border-gray py-4"
    >
      <h1 className="text-textt text-sm font-medium">{item.title}</h1>
      <h1 className="font-semibold text-3xl  mt-2">{item.amount}</h1>
    </div>
  ))}
</div>


                
        </div>
    </div>
    <div className='border-gray border-2 bg-white m-5  '>
     <div className='flex gap-5 m-3' >
        <div>

        <h1 className='font-semibold text-lg'>Invoices</h1>
        <h1 className='text-textt'>Your most recent invoices list</h1>
        </div>
          <div className='flex sm:flex-wrap  gap-4 border border-gray p-2' >
    {['overview','sale','Revenu'].map((btn)=>(

      
      
      <button key={btn} className={`border border-gray px-2 p-1 rounded-lg ${active ===btn?'bg-white  text-black':""}`} onClick={()=>setActive(btn)} >
 {btn.charAt(0).toUpperCase()+btn.slice(1)}
     </button>
    ))}

  </div>
   <div className='border-2 border-gray w-96   h-12 rounded-lg flex  gap-2  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 '>
  
        <CiSearch  className='flex items-start m-2 text-2xl '/>
        <input type="text"  placeholder='Search or Type Command....'  className=' w-96  outline-none  border-gray  rounded-lg'/>
        </div>
         <button  className='flex gap-2 border border-gray2 items-center justify-center font-semibold bg-white text-black transition-all duration-300 outline-none hover:bg-gray1  w-24 rounded-lg' > <span><LiaFilterSolid  className='text-lg '/></span>Filter
                        </button>
                                          <button className='flex gap-2 border border-gray2 items-center justify-center font-semibold bg-white text-black transition-all duration-300 outline-none hover:bg-gray1  w-24 rounded-lg'>Export <span><TbArrowDownToArc className='text-lg' /></span></button>
     </div>
     <div className='flex m-5 text-textt  font-bold'>
        <h1 className='w-[20%]'>Invoice Number</h1>
        <h1  className='w-[20%]'>Customer</h1>
        <h1  className='w-[20%]'>Creation Date</h1>
        <h1  className='w-[20%]'>Due Date</h1>
        <h1  className='w-[10%]'>Total </h1>
        <h1  className='w-[10%]'>Status</h1>


    
     </div>
    {currentinvoice && currentinvoice.length > 0 ? (
  currentinvoice.map((invoice, index) => (
    <div key={invoice._id} className="border-b border-gray p-4 rounded-lg mb-3 flex">
        <h1 className='w-[20%]'>{invoice.InvoiceNumber}</h1>
      <h2 className="w-[20%]">{invoice.CustomerName}</h2>
      <h1 className='w-[20%]'>{invoice.IssueDate}</h1>
      <h1 className='w-[20%]'>{invoice.DueDate}</h1>
    
       <h1 className='w-[10%]'></h1>

    </div>
  ))
) : (
    <p className="text-center text-gray-500 mt-5">No invoices found</p>
)}
</div>

    <button onClick={prevpage} disabled={currentpage===1}><IoIosArrowBack className='text-xl font-bold'/></button>
  {[...Array(Math.ceil((dataToDisplay?.length||0) / perpage))].map((_, index) => {
    const pageNum = index + 1;

    return (
      <button
        key={pageNum}
        onClick={() => setCurrentPage(pageNum)}
        className={`border border-gray duration-300 transition-all w-12 h-12 rounded-lg font-medium
          ${
            currentpage === pageNum
              ? 'text-white bg-primary'
              : 'bg-white text-black hover:bg-hower'
            }`}
      >
        {pageNum}
      </button>
    );
  })}


<button onClick={next} disabled={currentpage ===Math.ceil(invoice.length / perpage)}><IoIosArrowForward  className='text-xl font-bold'/></button>
    </div>  
</section>
    
</>
  )
}

export default Invoices