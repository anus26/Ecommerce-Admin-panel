import React from 'react'

const Product = () => {
  return (
    <>
    <section >
        <div>
        <div className='m-5'>
            <h1 className='font-bold text-2xl'>Add Product </h1>
            <div className='bg-white h-[52%]'>
                <h1>Product Description</h1>
                <div className='border-b border-gray'></div>
                <div >
                    <form  className='flex  m-10  gap-[28%] '>
<div className=''>
                    <h1 className='font-semibold text-md'>Product Name</h1>
<input type="text" placeholder='Enter Product Name'  className=' border w-[230%]  h-12 hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg ' />
</div>

                   <div className=''>
                    <h1 className='font-semibold text-md'>Category</h1>
  
<select type="option"   placeholder='Select Category'  className=' border w-[230%] h-12   hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg ' >
        <option value="">Select Category</option>

          <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
</div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Product