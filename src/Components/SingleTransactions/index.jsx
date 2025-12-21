import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiShoppingCart } from "react-icons/fi";
import { TbCalendarDollar } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
const SingleTransactions = () => {
  const [product,setProduct]=useState([])


  
  const fetchData = async () => {
      try {
        const res = await axios.get("https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/product", {
          withCredentials: true,
        });
        // const allProducts=res.data.product || []
        setProduct(res.data.product||[]);
        // setData(res.data)
        console.log("Get Data", res.data.product);
      } catch (error) {
        console.error(
          "❌ Add Data Error:",
          error.response?.data || error.message
        );
      }
    }
      useEffect(() => {
        fetchData();
        
      },[]);
     const totalPrice = product.reduce(
  (acc, item) => acc + item.Price * item.StockQuantity,
  0
);

const vat=product.reduce(
  (acc,item)=>acc+(item.Price*item.StockQuantity*0.1),
  0
)


      const handledelete=(index)=>{
      const updated=[...product]
      updated.splice(index,1)
      setProduct(updated)
      }
   
  return (
<section>
    <div className='m-5'>
        <div>
            <h1 className='font-semibold text-2xl'>
            Transactions Details
            </h1>
            {/* first */}
            <div className='border border-gray rounded-xl bg-white flex justify-between  '>
              <div className='m-5 flex items-center '>

              <h1 className='font-semibold text-lg'>Order ID:{} <span className='text-green  bg-dark p-1.5 text-sm rounded-full gap-2'>Completed</span></h1>
  <div className="border-r border-gray2 h-6 mx-4"></div>
  <h1 className='text-textt font-semibold'>Due date:{}</h1>
              </div>
              <div className='m-5 flex gap-3'>
                          <button type="submit" className="border outline-none bg-primary text-white hover:bg-hower border-gray transition-all duration-300 rounded-xl w-32 h-12 ">View Receipt</button>
                                    <button type="submit" className="border outline-none bg-white text-black font-semibold hover:bg-gray1 border-gray transition-all duration-300 rounded-xl w-24 h-12 ">Refund</button>
              </div>
            </div>
{/* second */}
<div className='flex justify-between mt-5 gap-5'>

<div className='border border-gray bg-white rounded-xl w-[70%] h-full'>
  <h1 className='font-semibold text-xl m-5'>Order Details</h1>
      <div className=" border rounded-lg border-gray2 w-[90%] m-5 ">
                  <div className="flex bg-gray1 p-[2%]  font-semibold border-gray1 rounded-xl">
                    <h1 className="w-[10%]">S.No</h1>
                    <h1 className="w-[20%]">Product</h1>
                    <h1 className="w-[20%]">Quantity</h1>
                    <h1 className="w-[20%]">Unit Cost</h1>
                    <h1 className="w-[20%]">Cost</h1>
                    {/* <h1 className="w-[5%]">Action</h1> */}
                    <h1 className="w-[5%]">Total</h1>
                  </div>
{product.Price}
                  {product.length > 0 ? (
                    product.map((p, index) => (
                      <div
                        key={p._id}
                        className="flex border-b border-gray m-5  text-textt font-semibold "
                      >
                        <div className="w-[10%]"> {index + 1}</div>
                        <h1 className="w-[20%] font-semibold text-black">
                          {p.ProductName}
                        </h1>
                        <h1 className="w-[20%]">{p.Price}</h1>{" "}
                        <h1 className="w-[20%]">{p.StockQuantity}</h1>{" "}
                        <h1 className="w-[20%]">{p.Discount}</h1>
                        <h1 className="w-[5%]">{p.Price}</h1>
                        <h1 className="w-[10%]">
                          <RiDeleteBin5Line className=" hover:text-red-300 text-lg" onClick={()=>handledelete()}/>
                        </h1>
                      </div>
                    ))
                  ) : (
                    <p>No products found</p>
                  )}

                </div >
                <div className='flex items-end justify-end m-5 flex-col gap-3'>
                  <h1 className='font-semibold text-md'>Order Summary</h1>
                  <h1 className='flex gap-6 text-textt text-md'>SubTotal:<span>{totalPrice}</span></h1>
                  <h1 className='flex gap-5 text-textt text-md'>Vat(10%): <span>{vat}</span></h1>
                  <h1 className='flex gap-5 text-lg font-semibold'>Total <span>${totalPrice+vat}</span></h1>
                </div>

</div>
{/* coustomer details */}
<div className='flex flex-col gap-8 '>


<div className='w-full bg-white border border-gray rounded-xl h-full '>
  <div className='m-5'>
    <h1 className='font-semibold text-xl'>Customer Details</h1>
     <table className="table-auto  text-textt">


  <tbody >
    <tr className='border-b border-gray '>
      <td className='p-1'>Name</td>
      <td className='p-1'>Mushafrof Chowdhury</td>
     
    </tr>
    <tr className='border-b border-gray '>
      <td className='p-1'>Street</td>
      <td className='p-1'>
800 E Elcamino Real, suite #400</td>
   
    </tr>
    <tr className='border-b border-gray '>
      <td className='p-1'>City/State</td>
      <td className='p-1'>
Mountain View, CA, 94040</td>
   
    </tr>
       <tr className='border-b border-gray '>
      <td className='p-1'>Country</td>
      <td  className='p-1'>
United States of America</td>
   
    </tr>
       <tr className='border-b border-gray '>
  
      <td className='p-1'>Zip/Postalcode</td>
      <td className='p-1'>
7400</td>

   
    </tr>
       <tr className='border-b border-gray '>
         
      <td className='p-1'>Town/City</td>
      <td className='p-1'>
New York</td>

   
    </tr>
       <tr className=' '>
        
      <td className='p-1'>VAT Number</td>
      <td className='p-1'>
DE4920348</td>

   
    </tr>
  </tbody>
</table>
  </div>

</div>

{/* Order History */}


<div className='border border-gray rounded-xl bg-white w-full h-full '> 
  <div className='m-5'>
    <h1 className='font-semibold text-xl'>Order History</h1>
    <div className='flex gap-5 m-2   '>

<div className='flex flex-col items-center   gap-6 relative'>
  <div className="absolute top-0 bottom-0 w-[1px] bg-gray border-gray border-dotted border-2 -translate-x-1/2 left-1/2"></div>
  <div className='border border-gray rounded-full bg-white w-10 h-10  flex items-center justify-center z-10'><FiShoppingCart  /></div>
  <div className='border border-gray rounded-full bg-white w-10 h-10  flex items-center justify-center z-10'><TbCalendarDollar /></div>
  <div className='border border-gray rounded-full bg-white w-10 h-10  flex items-center justify-center z-10'><MdOutlineMail /></div>
</div>
  <div className='flex flex-col'>
    <div >
      <h1 className='font-semibold text-lg'>Checkout Started</h1>
      <h1 className='text-sm text-textt'>via tailadmin.com</h1>
    </div>
     <div >
      <h1 className='font-semibold text-lg'>Purchased</h1>
      <h1 className='text-sm text-textt'>via tailadmin.com</h1>
    </div>
     <div >
      <h1 className='font-semibold text-lg'>Receipt Email Send</h1>
      <h1 className='text-sm text-textt'>via tailadmin.com</h1>
    </div>
  </div>
 <div className='flex flex-col'>
    <div >
      <h1 className='font-semibold text-textt text-sm'>12.54</h1>
      <h1 className='text-sm text-textt'>12th Apr 28</h1>
    </div>
     <div >
     <h1 className='font-semibold text-sm text-textt'>12.54</h1>
      <h1 className='text-sm text-textt'>12th Apr 28</h1>
    </div>
     <div >
        <h1 className='font-semibold text-sm text-textt'>12.54</h1>
      <h1 className='text-sm text-textt'>12th Apr 28</h1>
    </div>
  </div>
    </div>
  <div className='m-5 gap-2 flex'>
    <button className='bg-white rounded-lg border-gray border text-textt font-semibold text-sm p-2 hover:bg-gray1 transition-all duration-300 '>Resend</button>
        <button className='bg-white rounded-lg border-gray border text-textt font-semibold text-sm p-2 hover:bg-gray1 transition-all duration-300'>Forward</button>
            <button className='bg-white rounded-lg border-gray border text-textt font-semibold text-sm p-2 hover:bg-gray1 transition-all duration-300'>Preview</button>
    
  </div>
  </div>



</div>
</div>
</div>
            </div>
  
</div>
</section>
  )
}

export default SingleTransactions