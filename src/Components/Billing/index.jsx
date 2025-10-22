import React, { useEffect, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward, IoIosCheckmark } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { LiaFilterSolid } from 'react-icons/lia';
import { TbArrowDownToArc } from 'react-icons/tb';
import axios from 'axios';
const Billing = () => {
    const [filtered,setFiltered]=useState([])
      const [currentpage,setCurrentPage]=useState(1)
        const [invoice,setInvoice]=useState([])
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
    <div className='m-5'>
        <div className=''>
            <h1 className='text-2xl font-semibold text-black '>Billing</h1>
{/* first */}
            <div className='flex'>
{/* plan */}
           
            <div className='border border-gray  bg-white rounded-xl m-5 w-[65%]'>
                <h1 className='text-lg  font-semibold m-5 '>Plan Details</h1>
                <div className='border border-b border-gray'></div>
{/* plan */}
                
                <div className='flex '>

                <div className='border border-gray rounded-xl bg-white w-[50%] m-5 '>
                  <div className='m-5'>
                    <h1 className='text-textt text-md font-semibold'>Current Plan</h1>
                    <h1 className='text-md font-semibold'>Professional</h1>
                     <br />
                             <div className='border border-b border-gray'></div>
                             <br />
                    <h1 className='text-textt text-md font-semibold'>Montly Limits</h1>
                    <h1 className='text-md font-semibold'>25,000 Orders</h1>
                    <br />
                        <div className='border border-b border-gray'></div>
                        <br />
                         <h1 className='text-textt text-md font-semibold'>Cost</h1>
                    <h1 className='text-md font-semibold'>$190.00/Mont</h1>
                     <br />
                             <div className='border border-b border-gray'></div>
                             <br />
                    <h1 className='text-textt text-md font-semibold'>Renewal Date</h1>
                    <h1 className='text-md font-semibold'>Mar 22, 2003</h1>
                    <br />
                          <div className='border border-b border-gray'></div>
               <div className='flex gap-5'>
                <h1 className='font-semibold'>Orders</h1>
                <h1>15,299 of 23,599 orders used</h1>


               </div>
               <br />
                 <div className="w-56 bg-gray rounded-full h-3">
    <div
      className="bg-blue-500 h-3 rounded-full"
      style={{ width: "73%" }}
    >

        </div> 
  </div>
                </div>
                  </div>
                  {/* benefits */}
                <div className='m-5 text-textt  flex flex-col gap-5'>
                    <h1 className='font-semibold gap-3 text-xl m-2'>
                        Plan Benefits
                        
                    </h1>
                    <h1 className='flex gap-2 '><span><IoIosCheckmark className='text-xl' /></span>25,500 orders per month</h1>
                    <h1 className='flex gap-2 '><span><IoIosCheckmark className='text-xl'/></span>Unlimited integrations</h1>
                    <h1 className='flex gap-2'><span><IoIosCheckmark className='text-xl'/></span>Exclusive AutoFile discount</h1>
                    <h1 className='flex gap-2'><span><IoIosCheckmark className='text-xl'/></span> GB Storage</h1>
                    <h1 className='flex gap-2 line-through'><span><TiDeleteOutline className='text-xl'/></span>Custom Templates</h1>
                    <h1 className='flex gap-2 line-through'><span><TiDeleteOutline className='text-xl'/></span>Advanced Marketing tool</h1>

                <div className='flex gap-4  items-center'>
                    <button className='w-[50%] h-20 rounded-xl border text-black font-semibold bg-white  hover:bg-gray transition-all duration-300 
                    border-gray
                    '>Cancel Subscription</button>
                    <button className='bg-primary border border-gray hover:bg-hower transition-all duration-300
                    w-[60%] h-10 text-white font-semibold rounded-lg
                    '>Upgrade to Pro</button>
                </div>
                </div>
                

                </div>
                

            </div>
            {/* billing info */}
            <div className="border border-gray  bg-white rounded-xl m-5 w-[35%]">
              <h1 className='font-semibold m-5 text-lg'>Billing Info</h1>
  <div className='border border-b border-gray'></div>
 <table className="table-auto m-6 text-textt">


  <tbody >
    <tr className='border-b border-gray '>
      <td className='p-2'>Name</td>
      <td className='p-2'>Mushafrof Chowdhury</td>
     
    </tr>
    <tr className='border-b border-gray p-2'>
      <td className='p-3'>Street</td>
      <td className='p-3'>
800 E Elcamino Real, suite #400</td>
   
    </tr>
    <tr className='border-b border-gray '>
      <td className='p-3'>City/State</td>
      <td className='p-3'>
Mountain View, CA, 94040</td>
   
    </tr>
       <tr className='border-b border-gray '>
      <td className='p-3'>Country</td>
      <td  className='p-3'>
United States of America</td>
   
    </tr>
       <tr className='border-b border-gray '>
  
      <td className='p-3'>Zip/Postalcode</td>
      <td className='p-3'>
7400</td>

   
    </tr>
       <tr className='border-b border-gray '>
         
      <td className='p-3'>Town/City</td>
      <td className='p-3'>
New York</td>

   
    </tr>
       <tr className='border-b border-gray '>
        
      <td className='p-3'>VAT Number</td>
      <td className='p-3'>
DE4920348</td>

   
    </tr>
  </tbody>
</table>
<div className='flex justify-center'>

<button className='border border-gray bg-white hover:bg-gray1 rounded-xl p-3 w-[80%] font-semibold flex gap-6 justify-center transition-all duration-300 '><span><FaPencil className='text-md' /></span>Update Billing Address</button>
</div>
            </div>
</div>
{/* second */}
<div className='border border-gray bg-white rounded-xl  m-5'>
  {/* payment method */}
  <div className=' flex justify-between m-5'>
    <h1 className='font-semibold text-lg '>Payment Method </h1>
    <button className='border-gray p-3 rounded-xl hover:bg-gray1 border transition-all duration-300 flex justify-center gap-3 font-semibold items-center'>
   <span><FaPlus /></span>   Add New Card
    </button>
  </div>
  <div className='border-b border-gray'></div>
  {/*cards  */}
  <div className='flex'>

{/* card */}
<div className='border border-gray rounded-xl  w-[30%] m-5 p-5'>
<div className='flex  gap-4 m-5 items-center'>
  <img src="./images/money.png" alt="card" className='border border-gray w-[18%] h-14 ' />
  <div>

    
<h1 className='flex gap-3 text-lg font-semibold '>Mastercard 
  <span className='text-green  bg-dark p-1.5 text-sm rounded-full gap-2 flex'>
  <IoIosCheckmark className='text-xl'/>Default</span> </h1>
  <span className='text-textt'>*** **** *** 909</span>
  </div>

</div>
<h1 className='flex items-center text-center justify-center text-textt'>Expiry 1/2039</h1>
<div className='flex justify-center gap-4'>
  <button className='bg-white border border-gray p-1 w-[18%] hover:bg-gray1 transition-all duration-300 rounded-lg'>Edit</button>
    <button className='bg-white border border-gray p-1 w-[18%] hover:bg-gray1 transition-all duration-300 rounded-lg'>Delete</button>
</div>
</div>
{/* visa */}
<div className='border border-gray rounded-xl  w-[30%] m-5 p-5'>
<div className='flex  gap-4 m-5 items-center'>
  <img src="./images/visa.png" alt="card" className='border border-gray w-[18%] h-14 ' />
  <div>

    
<h1 className='flex gap-3 text-lg font-semibold '>Visa 

  </h1>
  <span className='text-textt'>*** **** *** 909</span>
  </div>

</div>
<h1 className='flex items-center text-center justify-center text-textt'>Expiry 1/2039</h1>
<div className='flex justify-center gap-4'>
  <button className='bg-white border border-gray p-1 w-[18%] hover:bg-gray1 transition-all duration-300 rounded-lg'>Edit</button>
    <button className='bg-white border border-gray p-1 w-[18%] hover:bg-gray1 transition-all duration-300 rounded-lg'>Delete</button>
</div>
    <button className=' bg-white border border-gray p-1 w-[18%] hover:bg-gray1 transition-all duration-300 rounded-lg'>Delete</button>
</div>
{/* paypal */}
<div className='border border-gray rounded-xl  w-[30%] m-5 p-5'>
<div className='flex  gap-4 m-5 items-center'>
  <img src="./images/paypal.png" alt="card" className='border border-gray w-[18%] h-14 ' />
  <div>

    
<h1 className='flex gap-3 text-lg font-semibold '>Paypal
   </h1>
  <span className='text-textt'>anusraza2678@gmail.com</span>
  </div>

</div>
<h1 className='flex items-center text-center justify-center text-textt'>Expiry 1/2039</h1>


<div className='flex justify-center gap-4'>
  <button className='bg-white border border-gray p-1 w-[18%] hover:bg-gray1 transition-all duration-300 rounded-lg'>Edit</button>
    <button className='bg-white border border-gray p-1 w-[18%] hover:bg-gray1 transition-all duration-300 rounded-lg'>Delete</button>
</div>
  <button className=' bg-white  border border-gray p-1 w-[18%] hover:bg-gray1 transition-all duration-300 rounded-lg'>Delete</button>

</div>
</div>
        </div>
        {/* Third */}
            <div className='border-gray border-2 bg-white m-5  '>
             <div className='flex gap-5 m-3' >
                <div>
        
                <h1 className='font-semibold text-lg'>Invoices</h1>
                <h1 className='text-textt'>Your most recent invoices list</h1>
                </div>
   
       
                 <button  className='flex gap-2 border border-gray2 items-center h-12 justify-center font-semibold bg-white text-black transition-all duration-300 outline-none hover:bg-gray1  w-24 rounded-lg' > <span><LiaFilterSolid  className='text-lg '/></span>Filter
        
                                </button>
                                                  <button className='flex gap-2 border  h-12 border-gray2 items-center justify-center font-semibold bg-white text-black transition-all duration-300 outline-none hover:bg-gray1  w-24 rounded-lg'>Export <span><TbArrowDownToArc className='text-lg' /></span></button>
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
        <img src={'./images/pdf.png'} alt=""  className='w-[3%]'/>
                <h1 className='w-[20%]'>{invoice.InvoiceNumber}</h1>
              <h2 className="w-[20%]">{invoice.CustomerName}</h2>
              <h1 className='w-[20%]'>{invoice.IssueDate}</h1>
              <h1 className='w-[20%]'>{invoice.DueDate}</h1>
              <h1 className='w-[10%]'>{invoice.Total}</h1>
             <h1
          className={`w-[10%] rounded-full font-semibold text-center
          ${
            invoice.Status === "Paid"
              ? "text-color3 bg-color4"
              : invoice.Status === "Draft"
              ? "text-color2 bg-color1"
              : invoice.Status === "Unpaid"
              ? "text-red1 bg-red2"
              : "text-gray-600 bg-gray-200" // default style
          }`}
        >
          {invoice.Status}
        </h1>
        
            
            
        
            </div>
          ))
        ) : (
            <p className="text-center text-gray-500 mt-5">No invoices found</p>
        )}
        <div className='flex justify-end'>
        
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
        </div>
  </div>
    </div>
</section>
</>
  )
}

export default Billing