import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { IoArrowUp } from "react-icons/io5";
import { BsArrowBarUp } from "react-icons/bs";
const Product = () => {
    const [count ,setCount]=useState(1)
    const handleIncrease=()=>setCount(count+1)
    const handleDecrease=()=>{
        if(count >1)  setCount(count -1) 
    }

  return (
    <section className="m-5">
      <h1 className="font-bold text-2xl mb-6">Add Product</h1>

      {/* Product Description Section */}
        <form className="space-y-6">
      <div className="bg-white p-6 border border-gray rounded-xl w-full mb-6">
        <h1 className="font-semibold text-xl mb-4">Product Description</h1>
        <div className="border-b border-gray mb-6"></div>

          {/* Row 1 */}
          <div className="flex gap-6">
            <div className="flex flex-col w-1/2">
              <label className="font-semibold text-md mb-2">Product Name</label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                           border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="font-semibold text-md mb-2">Category</label>
              <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                 border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]">
                <option value="">Select Category</option>
                <option value="laptop">Laptop</option>
                <option value="mobile">Mobile</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-6">
            <div className="flex flex-col w-1/2">
              <label className="font-semibold text-md mb-2">Brand</label>
              <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                 border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]">
                <option value="">Select Brand</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="dell">Dell</option>
              </select>
            </div>

            <div className="flex flex-col w-1/2">
              <label className="font-semibold text-md mb-2">Color</label>
              <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                 border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]">
                <option value="">Select Color</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex gap-6">
            {["Weight (kg)", "Length (cm)", "Width (cm)"].map((label, idx) => (
              <div key={idx} className="flex flex-col w-1/3">
                <label className="font-semibold text-md mb-2">{label}</label>
                <input
                  type="number"
                  placeholder={`Enter ${label}`}
                  className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                             border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold text-md mb-2 block">Description</label>
            <textarea
              placeholder="Enter Product Description"
              className="border w-full h-32 p-2 rounded-lg outline-none transition-all duration-300 
              border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
              />
          </div>
          
        </div>

      {/* Price & Availability Section */}
      <div className="bg-white p-6 border border-gray rounded-xl w-full">
        <h1 className="font-semibold text-xl mb-4">Price & Availability</h1>
        <div className="border-b border-gray mb-6"></div>

        <div className="flex gap-6">
          {["Price ($)", "Stock Quantity", "Discount (%)"].map((label, idx) => (
              <div key={idx} className="flex flex-col w-1/3">
              <label className="font-semibold text-md mb-2">{label}</label>
              <input
                type="number"
                placeholder={`Enter ${label}`}
                className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                />
            </div>
          ))}
        </div>
        <br />
        <div className="flex  gap-6">
            <div className="flex flex-col w-1/2">


            <label >Stock Quality</label>
          <div className="flex items-center  overflow-hidden border-2 outline-none border-gray w-90 h-14">
            <button className="border-r border-gray " type="button" onClick={handleDecrease}>   <HiOutlineMinusSmall className="w-10 h-8" /> </button>
           <input type="number" placeholder="1"  className="outline-none w-full text-center" onChange={(e)=>setCount(Number(e.target.value))} value={count} min={1}/> <button className="border-l border-gray " type="button" onClick={handleIncrease}><IoIosAdd className="w-10 h-8" /></button>
          </div>
            </div>
   
            <div className="flex flex-col w-1/2">
              <label className="font-semibold text-md mb-2">Availability Status </label>
              <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                 border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]">
                <option value="">Select Brand</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="dell">Dell</option>
              </select>
            </div>
            </div>
<br />
                         
                                

          
      </div>
      <br />
       <div className="bg-white p-6 border border-gray rounded-xl w-full">
        <h1 className="font-semibold text-xl mb-4">Price & Availability</h1>
        <div className="border-b border-gray mb-6"></div>
        <div className="border-dashed border hover:border-primary h-52 hover:shadow-[0_2px_8px_rgba(0,0,150,0.4) rounded-lg outline-none transition-all duration-300 ">
<label className=" items-center text-center justify-center" >
    <div className="flex items-center justify-center">

    <div className="border rounded-full w-16 h-16 flex m-4 text-center items-center  justify-center">

<BsArrowBarUp  className="text-3xl  mb-2" />
    </div>
    </div>
<span className="block ">Click to Upload or drag and drop</span>
   <span className="text-sm flex items-center justify-center">
      SVG, PNG, JPG or GIF (MAX. 800×400px)
    </span>
       <input type="file" className="hidden" />
</label>
    
        </div>
     
        
   
   
        <br />
       
<br />
                         
                                

          
      </div>
      <div className="flex justify-end gap-2">


      <button className="border outline-none bg-white text-black hover:bg-gray border-gray transition-all duration-300 rounded-xl w-20 h-12 ">Draft</button>

          <button className="border outline-none bg-primary text-white hover:bg-hower border-gray transition-all duration-300 rounded-xl w-32 h-12 ">Publish Product</button>
      </div>
          </form>
    </section> 
  );
};

export default Product;
