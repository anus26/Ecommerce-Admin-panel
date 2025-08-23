import React from 'react'
import { AiOutlineFilter } from "react-icons/ai";

const Orders = () => {

  const menuItems = [
    {
      image: './images/flag.png',
      product: 'Macbook Pro 13"',
      category: 'Laptop',
      price: '1200',
      status: 'Delivered'
    },
        {
      image: './images/flag.png',
      product: 'Macbook Pro 13"',
      category: 'Laptop',
      price: '1200',
      status: 'Delivered'
    },
        {
      image: './images/flag.png',
      product: 'Macbook Pro 13"',
      category: 'Laptop',
      price: '1200',
      status: 'Delivered'
    },
        {
      image: './images/flag.png',
      product: 'Macbook Pro 13"',
      category: 'Laptop',
      price: '1200',
      status: 'Delivered'
    },
    {
      image: './images/bot.png',
      product: 'iPhone 15 Pro',
      category: 'Mobile',
      price: '999',
      status: 'Pending'
    }
  ];

  return (
    <>
      <div className='bg-white border rounded-xl w-[70%] m-5'>
        {/* Header */}
        <div className='flex justify-between m-4'>
          <h1 className='font-semibold text-xl'>Recent Orders</h1>
          <div className='flex gap-3'>
            <button className='flex border w-24 h-12 items-center font-semibold hover:bg-gray-100 text-md outline-none rounded-xl gap-1 justify-center bg-white duration-300 transition-all'>
              <AiOutlineFilter /> Filter
            </button>
            <button className='border w-24 h-12 items-center font-semibold hover:bg-gray-100 text-md outline-none rounded-xl gap-1 justify-center bg-white duration-300 transition-all'>
              See all
            </button>
          </div>
        </div>

        <div className='border-b m-5'></div>

        {/* Table Headings */}
        <div className='flex justify-between m-7 font-semibold text-gray-600'>
          <h1 className='w-[40%]'>Product</h1>
          <h1 className='w-[20%]'>Category</h1>
          <h1 className='w-[20%]'>Price</h1>
          <h1 className='w-[20%]'>Status</h1>
        </div>

        <div className='border-b m-7'></div>

        {/* Table Rows */}
        <div>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className='flex justify-between items-center m-5 text-gray-700'
            >
              {/* Image + Product */}
              <div className='flex items-center gap-3 w-[40%]'>
                <img src={item.image} alt={item.product} className='w-10 h-10 object-cover rounded-lg' />
                <p className='font-medium'>{item.product}</p>
              </div>

              {/* Category */}
              <p className='w-[20%]'>{item.category}</p>

              {/* Price */}
              <p className='w-[20%]'>${item.price}</p>

              {/* Status */}
              <p
                className={`w-[20%] font-semibold  ${
                  item.status === "Delivered"
                    ? "text-green-700 bg-green "
                    : "text-yellow-600"
                }`}
              >
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
