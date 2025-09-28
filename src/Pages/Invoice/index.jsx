import React, { useEffect, useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { IoArrowUp } from "react-icons/io5";
import { BsArrowBarUp } from "react-icons/bs";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";

const Invoice = () => {
    const [count ,setCount]=useState(1)
    const [products,setProdcut]=useState([])
    const [filtered,setFilteredProducts]=useState([])
        const [showfilter, setShowFilter]=useState(false)
        const [Data,setData]=useState({
            ProductName:""
,Price:"",
StockQuantity:"'",
Discount:""
        })
    const [formData,setFormData]=useState({
      InvoiceNumber:"",CustomerName:"",CustomerAddress:"",PaymentCondition:"",IssueDate:"",DueDate:"",Additionalinfo:"",Products:[],Currency:""

    })
const fetchDataproduct = (e) => {
  e.preventDefault();

  // Filter products
  const filtered = products.filter((p) => {
    return (
      (Data.ProductName === "" || p.ProductName?.toLowerCase().includes(Data.ProductName.toLowerCase())) &&
      (Data.Price === "" || p.Price?.toString().includes(Data.Price)) &&
      (Data.StockQuantity === "" || p.StockQuantity?.toString().includes(Data.StockQuantity)) &&
      (Data.Discount === "" || p.Discount?.toLowerCase().includes(Data.Discount.toLowerCase()))
    );
  });

  let selectedProducts = [];

  if (filtered.length > 0) {
    // 🟢 Matching product found in DB
    selectedProducts = filtered.map((p) => ({
      productId: p._id,
      ProductName: p.ProductName,
      Discount: Data.Discount || 0,
      StockQuantity: count,
      Price: p.Price || 0,
    }));
  } else {
    // 🔵 No matching product → use manual input (custom product)
    selectedProducts = [
      {
        productId: null, // null kyunki ye custom hai
        ProductName: Data.ProductName || "Unnamed Product",
        Discount: Data.Discount || 0,
        StockQuantity: count,
        Price: Data.Price || 0,
      },
    ];
  }

  // add products in invoice
  setFormData((prev) => ({
    ...prev,
    Products: [...prev.Products, ...selectedProducts],
  }));

  // reset filter input
  setData({
    ProductName: "",
    Price: "",
    StockQuantity: "",
    Discount: "",
  });
  setCount(1);
};



       const handlechanges=(e)=>{
      setData({...Data,[e.target.name]:e.target.value })
    }
    
    const handlechange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value })
    }

 const handleIncrease=()=> {
      const newValue=count+1
// setFormData({...Data,StockQuatity:newValue})      
      setCount(count+1)
    }
    const handleDecrease=()=>{
      const newValue=count-1
        if(count >1)  setCount(count -1) 
          setCount(count-1)
        // setData({...Data,StockQuatity:newValue})
    }
    const handleclick=async(e)=>{
        e.preventDefault()
        try {
            
            const res=await axios.post('http://localhost:5000/api/v1/invoice',formData,{
                withCredentials:true
        })
        setFormData(res.data)
        console.log("✅ Successfully Added Invoice:", res.data);
      setFormData({
        InvoiceNumber: "",
        CustomerName: "",
        CustomerAddress: "",
        PaymentCondition: "",
        IssueDate: "",
        DueDate: "",
        Additionalinfo: "",
        Currency: "",
        Products: [],
      });
        
    
} catch (error) {
   
    console.error("❌ Add Data Error:", error.response?.data || error.message);
  }
}


const fetchData=async()=>{
    try {
        const res =await axios.get('http://localhost:5000/api/v1/product',{
            withCredentials:true
        })
        setProdcut(res.data.product)
        // setData(res.data)
        console.log("Get Data",res.data);
        

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
    <div className='m-5'>
        <div>
            <h1 className='text-2xl font-semibold'>Create Invoice</h1>
          <form className="space-y-6" onSubmit={handleclick}>
                <div className="bg-white p-6 border border-gray rounded-xl w-full mb-6">
                  <h1 className="font-semibold text-xl mb-4">Product Description</h1>
                  <div className="border-b border-gray mb-6"></div>
          
                    {/* Row 1 */}
                    <div className="flex gap-6">
                      <div className="flex flex-col w-1/2">
                        <label className="font-semibold text-md mb-2">Invoice Number</label>
                        <input
                          type="number"
                          placeholder="Enter Product Name"
                          value={formData.InvoiceNumber}
                          name="InvoiceNumber"
                          onChange={handlechange}
                          className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                     border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                        />
                      </div>
          
                      <div className="flex flex-col w-1/2">
                        <label className="font-semibold text-md mb-2">Customer Name</label>
                        <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                           border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] "   value={formData.CustomerName}
                          name="CustomerName"
                          onChange={handlechange}>
                          <option value="">Select Category</option>
                          <option value="laptop">Laptop</option>
                          <option value="mobile">Mobile</option>
                          <option value="tablet">Tablet</option>
                        </select>
                      </div>
                    </div>

                    <div >
                        <label  className="font-semibold text-md mb-2">Customer Address </label>
                              <input
                          type="text"
                          placeholder="Enter Product Name"
                          value={formData.CustomerAddress}
                          name="CustomerAddress"
                          onChange={handlechange}
                          className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                     border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                        />
                    </div>
          
                    {/* Row 2 */}
                    <div className="flex gap-6">
                      <div className="flex flex-col w-1/2">
                        <label className="font-semibold text-md mb-2">Payment Condition</label>
                        <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                           border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"   value={formData.PaymentCondition}
                          name="PaymentCondition"
                          onChange={handlechange}>
                          <option value="">Select Brand</option>
                          <option value="apple">Apple</option>
                          <option value="samsung">Samsung</option>
                          <option value="dell">Dell</option>
                        </select>
                      </div>
          
                      <div className="flex flex-col w-1/2">
                        <label className="font-semibold text-md mb-2">Currency</label>
                        <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                           border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"   value={formData.Currency}
                          name="Currency"
                          onChange={handlechange}>
                          <option value="">Select Color</option>
                          <option value="black">Black</option>
                          <option value="white">White</option>
                          <option value="blue">Blue</option>
                        </select>
                      </div>
                    </div>
                    {/* date */}
                    <div className='flex w-1/2 gap-5'>
                        <div >
                            <label >Issue Date</label>
                        <input
                          type="Date"
                          placeholder="Enter Issue Date"
                          value={formData.IssueDate}
                          name="IssueDate"
                          onChange={handlechange}
                          className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                     border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                        />
                        </div>
                            <div>
                            <label >Due Date</label>
                        <input
                          type="Date"
                          placeholder="Enter Issue Date"
                          value={formData.DueDate}
                          name="DueDate"
                          onChange={handlechange}
                          className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                     border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                        />
                        </div>
                    </div>
          
                
          
                    {/* Description */}
                    <div>
                      <label className="font-semibold text-md mb-2 block">Additional Info</label>
                      <textarea
                        placeholder="Enter Product Description"
                        className="border w-full h-32 p-2 rounded-lg outline-none transition-all duration-300 
                        border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"   value={formData.Additionalinfo}
                          name="Additionalinfo"
                          onChange={handlechange}
                        />
                    </div>
                    <br />
                                 <div className="border-b border-gray  "></div>

                                 <br />
                                 <div className=' border rounded-lg border-gray2 '>
                                    <div className='flex bg-gray1 p-[2%]  font-semibold border-gray1 rounded-xl'>
                                        <h1 className='w-[10%]'>S.No</h1>
                                        <h1 className='w-[20%]'>Product</h1>
                                        <h1 className='w-[20%]'>Quantity</h1>
                                        <h1 className='w-[20%]'>Unit Cost</h1>
                                        <h1 className='w-[20%]'>Cost</h1>
                                           <h1 className="w-[10%]">Action</h1>
                                    </div>



{formData. Products.length > 0 ? (
    formData.Products.map((p,index) => (
        <div key={p._id} className='flex border-b border-gray m-5  text-textt font-semibold'>
            
                                <td className='w-[10%]'> {index + 1}</td> 

      <h1 className='w-[20%] font-semibold text-black'>{pr.ProductName}</h1>
        <h1 className='w-[20%]'>{p.Price}</h1>  <h1 className='w-[20%]'>{p.StockQuantity}</h1>  <h1 className='w-[20%]'>{p.Discount}</h1><h1 className='w-[10%]'><RiDeleteBin5Line className=' hover:text-red-300 text-lg' />
</h1>
    </div>
  ))
) : (
    <p>No products found</p>
)}
</div>
{/* <button 
  type="button" 
  onClick={() => setShowFilter(!showfilter)}
  className="border outline-none bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
  > 
  {showfilter ? "Hide Filter" : "Show Filter"} 
</button> */}
{filtered &&(


                                 <div className='flex  gap-5  outline-none  rounded-lg mt-10 p-10 bg-gray1'>


                                    <div className='w-[20%]'>
                                        <label >Product</label>
                                               <input
                          type="text"
                          placeholder="Enter Product Name"
                          value={Data.ProductName}
                          name="ProductName"
                          onChange={handlechanges}
                          className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                          border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                          />
                                    </div>
                                                  <div className='w-[20%]'>
                                        <label >Price</label>
                                               <input
                          type="number"
                          placeholder="Enter Product Name"
                          value={Data.Price}
                          name="Price"
                          onChange={handlechanges}
                          className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                          border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                          />
                                    </div>
                                       <div className="flex flex-col w-[20%]">
                                    
                                    
                                                <label >Stock  Quantity</label> 
                                              <div className="flex items-center  overflow-hidden border-2 outline-none bg-white border-gray w-90 h-12">
                                                <button className="border-r border-gray " type="button" onClick={handleDecrease} value={Data.StockQuatity}
                                                    name="StockQuantity"
                                                    onChange={handlechanges}>   <HiOutlineMinusSmall className="w-10 h-5" /> </button>
                                               <input type="number" placeholder="1"     className="outline-none w-full text-center" onChange={(e)=>setCount(Number(e.target.value))} value={count} min={1}/> 
                                               <button className="border-l border-gray b " type="button" onClick={handleIncrease}><IoIosAdd className="w-10 h-5 " /></button>
                                              </div>
                                                </div>
                                          <div className="flex flex-col w-[20%] ">
              <label className="font-semibold text-md">Discount </label>
                                            <input
                          type="number"
                          placeholder="Enter Product Name"
                          value={Data.Discount}
                          name="Discount"
                          onChange={handlechanges}
                          className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                          border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                          />
            </div>
            <div className='mt-6'>
                      <button  
                      onClick={fetchDataproduct}
                      className="border outline-none bg-primary text-white
                      hover:bg-hower border-gray 
                      transition-all duration-300 rounded-xl w-32 h-12 ">
                        Save Product</button>
            </div>

                                 </div>
                         
                         
                        )}
                        {/* {formData.Products.length > 0 ? (
                        formData.Products.map((p, idx) => (
                        <div key={idx} className="p-2 border rounded my-2">
                        <p>
                        {p.ProductName} - Qty: {p.StockQuantity} - Price: ${p.Price} - Discount:${p.Discount}
                        </p>
                  </div>
                ))
              ) : (
                <p>No product selected</p>
              )} */}


<br />
                                   <div className="border-b border-gray  "></div>
                                   <br />
                <div className="flex justify-end gap-2">
          
          
                {/* <button className="border outline-none bg-white text-black hover:bg-gray border-gray transition-all duration-300 rounded-xl w-20 h-12 ">Draft</button> */}
          
                    <button type="submit" className="border outline-none bg-primary text-white hover:bg-hower border-gray transition-all duration-300 rounded-xl w-32 h-12 ">Publish Product</button>
                </div>
                  </div>
          
       
              
                
              
                    </form>
        </div>
    </div>
</section>
   </>
  )
}

export default Invoice