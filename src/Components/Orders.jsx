import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineFilter } from "react-icons/ai";

const Orders = () => {
  const [products,setProdcut]=useState([])


  const fetchData=async()=>{
    try {
      
      const res=await axios.get("https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/product",{
        withCredentials:true,
      })
      console.log("Get Data Successfully",res.data);
      setProdcut(res.data.product)
      
    } catch (error) {
       console.error("❌ Add Data Error:", error.response?.data || error.message);
  }
      
    }
    
  
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <>
      <div className='bg-white border border-gray rounded-xl  m-5   sm:overflow-x-auto '>
        {/* Header */}
        <div className='flex justify-between m-4'>
          <h1 className='font-semibold text-xl'>Recent Orders</h1>
          <div className='flex gap-3'>
            <button className='flex border border-gray w-24 h-12 items-center font-semibold hover:bg-gray1 text-md outline-none rounded-xl gap-1 justify-center bg-white duration-300 transition-all'>
              <AiOutlineFilter /> Filter
            </button>
            <button className='border  border-gray w-24 h-12 items-center font-semibold hover:bg-gray1 text-md outline-none rounded-xl gap-1 justify-center bg-white duration-300 transition-all'>
              See all
            </button>
          </div>
        </div>

        <div className='border-b border-gray m-5'></div>

        {/* Table Headings */}
        <div className='flex justify-between m-7 font-semibold text-gray-600 sm:w-full overflow-x-auto'>
          <h1 className='w-[40%] sm:w-[30%]'>Product</h1>
          <h1 className='w-[20%] sm:w-[30%]'>Category</h1>
          <h1 className='w-[20%] '>Price</h1>
          <h1 className='w-[20%]'>Brand</h1>
        </div>

        <div className='border-b m-7 border-gray'></div>

        {/* Table Rows */}
        <div className=''>
          {products.map((product) => (
            <div
              key={product._id}
              className='flex justify-between items-center m-5 text-gray-700 sm:w-full overflow-x-auto'
            >
              {/* Image + Product */}
              <div className='flex items-center gap-3 w-[40%]'>
                <img src={product.images} alt={product.ProductName} className='w-10 h-10 object-cover rounded-lg' />
                <div>

                <p className='font-medium'>{product.ProductName}</p>
                <p>{product.StockQuantity}</p>
                </div>
              </div>

              {/* Category */}
              <p className='w-[20%]'>{product.Category}</p>

              {/* Price */}
              <p className='w-[20%] '>${product.Price}</p>

              {/* Status */}
              <p
                className={`w-[20%] font-semibold  ${
                  product.Brand === "Delivered"
                    ? "text-green-700 text-green "
                    : "text-yellow-600"
                }`}
              >
                {product.Brand}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
