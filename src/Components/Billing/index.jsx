import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosCheckmark } from "react-icons/io";
const Billing = () => {
  return (
<>
<section>
    <div className='m-5'>
        <div className=''>
            <h1 className='text-2xl font-semibold text-black '>Billing</h1>

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
 <table class="table-auto m-6 text-textt">


  <tbody >
    <tr>
      <td>Name</td>
      <td>Mushafrof Chowdhury</td>
     
    </tr>
      <div className='border border-b border-gray'></div>
    <tr>
      <td>Street</td>
      <td>
800 E Elcamino Real, suite #400</td>
   
    </tr>
      <div className='border border-b border-gray'></div>
    <tr>
      <td>City/State</td>
      <td>
Mountain View, CA, 94040</td>
   
    </tr>
      <div className='border border-b border-gray'></div>
       <tr>
      <td>Country</td>
      <td>
United States of America</td>
   
    </tr>
       <tr>
          <div className='border border-b border-gray'></div>
      <td>Zip/Postalcode</td>
      <td>
7400</td>

   
    </tr>
      <div className='border border-b border-gray'></div>
           <tr>
      <td>Town/City</td>
      <td>
New York</td>

   
    </tr>
      <div className='border border-b border-gray'></div>
           <tr>
      <td>VAT Number</td>
      <td>
DE4920348</td>

   
    </tr>
      <div className='border border-b border-gray'></div>
  </tbody>
</table>
            </div>
</div>
        </div>
    </div>
</section>
</>
  )
}

export default Billing