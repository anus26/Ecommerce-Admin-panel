import React from 'react'

const Product = () => {
  return (
    <section>
      <div className="m-5">
        <h1 className="font-bold text-2xl">Add Product</h1>

        <div className="bg-white p-6 border border-gray rounded-xl w-full h-full">
          <h1 className="font-semibold text-xl mb-4">Product Description</h1>
          <div className="border-b border-gray mb-6"></div>

          <form className="  gap-16">
            {/* Left Side */}
      <div className="flex gap-6">
  {/* Product Name */}
  <div className="flex flex-col w-1/2">
    <label className="font-semibold text-md mb-2">Product Name</label>
    <input
      type="text"
      placeholder="Enter Product Name"
      className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                 border-gray-300 hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
    />
  </div>

  {/* Category */}
  <div className="flex flex-col w-1/2">
  
    <label className="font-semibold text-md mb-2">Category</label>
    <select
      className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                 border-gray-300 hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
    >
      <option value="">Select Category</option>
      <option value="laptop">Laptop</option>
      <option value="mobile">Mobile</option>
      <option value="tablet">Tablet</option>
    </select>
  </div>
</div>


          

            {/* Right Side */}
       <div  className='flex gap-6 '>
       <div className="flex flex-col w-1/2">

              <label className="font-semibold text-md">Brand</label>
              <select
                className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                           >
                <option value="">Select Brand</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="dell">Dell</option>
              </select>
                </div>
                <div className='flex flex-col w-1/2'>


              <label className="font-semibold text-md">Status</label>
              <select
                className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                >
                <option value="">Select Status</option>
                <option value="available">Available</option>
                <option value="outofstock">Out of Stock</option>
                <option value="comingsoon">Coming Soon</option>
              </select>
          
            
                    </div>
                  
                         </div>

            

          </form>
        </div>
      </div>
    </section>
  )
}

export default Product

