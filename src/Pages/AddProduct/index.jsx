import React, { useEffect, useState } from 'react'
import   { Link }  from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { TbArrowDownToArc } from "react-icons/tb";
import { LiaFilterSolid } from "react-icons/lia";
import { IoSearch } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import axios from 'axios';
const AddProduct = () => {
     const [products,setProdcut]=useState([])
  const [currentpage,setCurrentPage]=useState(1)
  const [active ,setActive]=useState(null)
    const [active1 ,setActive1]=useState(null)
  const perpage=5
  const indexofLastpage=currentpage*perpage
  const indexOfFirstpage=indexofLastpage-perpage
  const currentproduct=products.slice(indexOfFirstpage,indexofLastpage)




  const next=()=>{
    if (currentpage <Math.ceil (products.length /perpage)) {
      setCurrentPage(prev =>prev+1)
      setActive('1')
      setActive1('2')
      
    }
  }
  const prevpage=()=>{
    if (currentpage >1) {
      setCurrentPage(prev =>prev-1)
     setActive('1')
     setActive1('2')
     
      
    }
  }

  

  


  const fetchData=async()=>{
    try {
      
      const res=await axios.get("http://localhost:5000/api/v1/product",{
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
   <section>
    <div className='Add Product m-5'>
        <div>
          {/* first section */}
            <div className='flex justify-between'>

         <h1 className='font-semibold'>Add Product</h1>
         <div className='flex '>
        <Link to='/'>Home</Link><span><IoIosArrowForward className='text-2xl' />
</span>
         <h1>Products</h1>
         </div>
      
            </div>
{/* second section */}
            <div className='bg-white border border-gray2 rounded-lg outline-none mt-5 '>
              <div className='flex justify-between m-5'>
                <div>
                <h1 className='font-bold text-xl'>Products List</h1>
                 <p className='text-textt'>Track your store's progress to boost your sales.</p>
                </div>
                <div className='flex gap-3'>
                  <button className='flex gap-2 border border-gray2 items-center justify-center font-semibold bg-white text-black transition-all duration-300 outline-none hover:bg-gray1  w-24 rounded-lg'>Export <span><TbArrowDownToArc className='text-lg' /></span></button>
                  <button className='flex gap-2 border bg-primary justify-center  items-center font-semibold text-white transition-all duration-300 outline-none hover:bg-hower  w-36 border-gray2 rounded-lg '><span><IoIosAdd className='text-2xl' /></span>Add Product </button>
                </div>
 
              </div>
              <div className='border-b-2 border-gray2 '></div>
              <br />
              <div className='flex justify-between ml-5 mr-5'>
                <div className='flex border border-gray2  outline-none w-[30%] h-12  rounded-lg  gap-2 hover:border-primary transition-all hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] cursor-pointer '>
                <span><CiSearch className='text-2xl flex mt-2 m-4'/></span>
                <input type="text"  placeholder='Search' className='border-none outline-none'/>
                </div>
                <button className='flex gap-2 border border-gray2 items-center justify-center font-semibold bg-white text-black transition-all duration-300 outline-none hover:bg-gray1  w-24 rounded-lg'> <span><LiaFilterSolid  className='text-lg'/></span>Filter </button>
              </div>
           <div className='border-b-2 border-gray2  mt-3 '></div>
           <br />
           <div className='m-3'>
            <div className='flex gap-4 mt-2 ml-2 text-textt'>
                  <h1 className='w-[30%]'>Product</h1>
          <h1 className='w-[20%]'>Category</h1>
          <h1 className='w-[20%]'>Price</h1>
          <h1 className='w-[20%]'>Brand</h1>
          <h1 className='w-[20%]'>Stock</h1>
          <h1 className='w-[20%]'>Created At</h1>
            </div>
             <div className='border-b mt-2 border-gray'></div>
              <div>
          {currentproduct.length > 0 ? (currentproduct.map((product) => (
            <div
              key={product._id}
              className='flex justify-between items-center  text-gray-700 border-b  border-gray2 mt-4'
            >
              {/* Image + Product */}
              <div className='flex items-center gap-3 w-[30%]'>
                <img src={product.images} alt={product.ProductName} className='w-10 h-10 object-cover rounded-lg' />
                <div>

                <p className='font-medium'>{product.ProductName}</p>
                <p>{product.StockQuantity}</p>
                </div>
              </div>

              {/* Category */}
              <p className='w-[20%]'>{product.Category}</p>

              {/* Price */}
              <p className='w-[20%]'>${product.Price}</p>

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
              <p className='w-[20%]'>{product.StockQuantity}</p>
              <p className='w-[20%]'>{new Date(product.createdAt).toLocaleDateString()}</p>
            </div>
   ))
      ) : (
        <p>No products found</p>
      )}
              <div className='flex justify-between'>
                <p className='mt-3 text-lg'>Showing by <span className='font-semibold'>1</span>to <span className='font-semibold'>7</span >of <span className='font-semibold'> 20</span></p>
                <div className='flex p-3 mt-2'>
                  <h1 className='flex gap-3 text-lg font-bold'>
                    <button onClick={prevpage} disabled={currentpage ===1} >
<IoIosArrowBack className='text-xl font-bold'/>
                    </button>

                 {[...Array(Math.ceil(products.length / perpage))].map((_, index) => {
                        const pagenum=index+1
                        return (
                      <button key={pagenum} onClick={()=>setCurrentPage(pagenum)} 
                      className={` border border-gray duration-300 transition-all text-black ${currentpage ===pagenum ?' text-white bg-primary' :' text-black bg-white hover:bg-hower'} cursor-pointer w-12 h-12 rounded-lg text-white`}>{pagenum}</button>
                  )  })}
                    {/* <button onClick={next} disabled={currentpage ===Math.ceil(products.length /perpage)}    */}
                   {/* className={`  border border-gray duration-300 transition-all text-black ${active1 ==='2' ?'bg-primary text-white':'bg-white text-black'} cursor-pointer w-12 h-12 rounded-lg text-white`}>2</button> */}

                    <button onClick={next} disabled={currentpage ===Math.ceil(products.length / perpage)}><IoIosArrowForward  className='text-xl font-bold'/></button>
                     </h1>
                </div>


              </div>
        </div>
           </div>

        
            </div>

        </div>

    </div>
   </section>
   </>
  )
}

export default AddProduct