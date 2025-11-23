import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { LiaFilterSolid } from 'react-icons/lia'
import { TbArrowDownToArc } from 'react-icons/tb'
import Product from '../Products'

const Transactions = () => {
   const [invoice,setInvoice]=useState([])
      const [filtered,setFiltered]=useState([])
      const [currentpage,setCurrentPage]=useState(1)
      const [product,setProdcut]=useState([])
const [filterDays, setFilterDays] = useState(7);

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



        const handlefilter=(e)=>{
    const days=parseInt(e.target.value.replace('Last','').replace('Days',''),10)
    setFilterDays(days)
    const now=new Date()
    const start=new Date()
    start.setDate(now.getDate()-days)

    const filterData=invoice.filter((inv)=>{
      const due=new Date(inv.DueDate)
      return due>= start && due <=now
    })
    setFiltered(filterData)
    setCurrentPage(1)

    }
        
  return (
  <section>
    <div className='m-5'>
      <div >
        <h1 className='font-semibold text-2xl'>Transactions</h1>
           <div className='border-gray border-2 bg-white m-5  '>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-3' >
                <div>
        
                <h1 className='font-semibold text-lg'>Transactions</h1>
                <h1 className='text-textt'>Your most recent Transactions list</h1>
                </div>
     
           <div className='border-2 border-gray  sm:hidden   h-12 rounded-lg lg:flex  gap-2  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 '>
          
                <CiSearch  className='flex items-start m-2 text-2xl '/>
                <input type="text"  placeholder='Search or Type Command....'  className='   outline-none  border-gray  rounded-lg'/>
                </div>
                 <select  className='flex gap-2 border border-gray2 items-center h-12 justify-center font-semibold bg-white text-black transition-all duration-300 outline-none hover:bg-gray1  w-32 rounded-lg' onChange={handlefilter} >
                <option >Last 7 Days</option>
                     <option >Last 10 Days</option>
                   <option >Last 15 Days</option>
                        <option >Last 30 Days</option>

                                </select>
                                                  <button className='lg:flex sm:hidden gap-2 border  h-12 border-gray2 items-center justify-center font-semibold bg-white text-black transition-all duration-300 outline-none hover:bg-gray1  w-24 rounded-lg'>Export <span><TbArrowDownToArc className='text-lg' /></span></button>
             </div>
             <div className='overflow-x-auto w-full'>
              <div className='min-w-[1200px]'>

             <div className='grid grid-cols-7 m-5 text-textt  font-bold'>
                <h1 className=''>Invoice Number</h1>
                <h1  className=''>Customer</h1>
                <h1  className=''>Currency</h1>
                <h1  className=''>Due Date</h1>
                <h1  className=''>Total </h1>
                <h1  className=''>Status</h1>
        
        
            
             </div>
            {currentinvoice && currentinvoice.length > 0 ? (
          currentinvoice.map((invoice, index) => (
            <div key={invoice._id} className=" p-4   grid grid-cols-7">
                <h1 className=''>{invoice.InvoiceNumber}</h1>
              <h2 className="">{invoice.CustomerName}</h2>
              <h1 className=''>{invoice.Currency}</h1>
              <h1 className=''>{invoice.DueDate}</h1>
              <h1 className=''>{invoice.Total}</h1>
             <h1
          className={`w-[50%] rounded-xl font-semibold text-center
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
        </div>

       </div>
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
  )
}

export default Transactions