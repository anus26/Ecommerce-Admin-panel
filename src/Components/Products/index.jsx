import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { IoArrowUp } from "react-icons/io5";
import { BsArrowBarUp } from "react-icons/bs";
import axios from "axios";
const Product = () => {
    const [count ,setCount]=useState(1)
    const [formData,setFormData]=useState({
      ProductName:"",Category:"",Price:"",Length:"",Weight:"",Width:"",Description:"",Brand:"",StockQuality:"",StockQuantity:"",color:"",Discount:"",Availability:"",image:null

    })
    const [images,setImages]=useState([])
    
    const handlechange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value })
    }
const handleImage = (e) => {
  setFormData({ ...formData, images: e.target.files[0] });
};

    
    
    const handleIncrease=()=> {
      const newValue=count+1
setFormData({...formData,StockQuality:newValue})      
      setCount(count+1)
    }
    const handleDecrease=()=>{
      const newValue=count-1
        if(count >1)  setCount(count -1) 
          setCount(count-1)
        setFormData({...formData,StockQuality:newValue})
    }
  const handleclick = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    // append all text fields
    Object.keys(formData).forEach((key) => {
      if (key !== "images") {
        data.append(key, formData[key]);
      }
    });

    // append image
    if (formData.images) {
      data.append("images", formData.images); // 👈 name must match backend multer.single("images")
    }

    const res = await axios.post("http://localhost:5000/api/v1/product", data, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("✅ Successfully Add Data", res.data.newproduct);
  } catch (error) {
    console.error("❌ Add Data Error:", error.response?.data || error.message);
  }
};

  return (
    <section className="m-5">
      <h1 className="font-bold text-2xl mb-6">Add Product</h1>

      {/* Product Description Section */}
        <form className="space-y-6 " onSubmit={handleclick}>
      <div className="bg-white p-6 border border-gray rounded-xl w-full mb-6">
        <h1 className="font-semibold text-xl mb-4">Product Description</h1>
        <div className="border-b border-gray mb-6"></div>

          {/* Row 1 */}
          <div className="flex gap-6 sm:flex-wrap">
            <div className="flex flex-col w-1/2 sm:w-full">
              <label className="font-semibold text-md mb-2">Product Name</label>
              <input
                type="text"
                placeholder="Enter Product Name"
                value={formData.ProductName}
                name="ProductName"
                onChange={handlechange}
                className="border xl:w-full  h-12 p-2 rounded-lg outline-none transition-all duration-300 
                           border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
              />
            </div>

            <div className="flex flex-col w-1/2 sm:w-full">
              <label className="font-semibold text-md mb-2">Category</label>
              <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                 border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] "   value={formData.Category}
                name="Category"
                onChange={handlechange}>
                <option value="">Select Category</option>
                <option value="laptop">Laptop</option>
                <option value="mobile">Mobile</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-6 sm:flex-wrap">
            <div className="flex flex-col w-1/2 sm:w-full">
              <label className="font-semibold text-md mb-2">Brand</label>
              <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                 border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"   value={formData.Brand}
                name="Brand"
                onChange={handlechange}>
                <option value="">Select Brand</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="dell">Dell</option>
              </select>
            </div>

            <div className="flex flex-col w-1/2 sm:w-full">
              <label className="font-semibold text-md mb-2">Color</label>
              <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                 border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"   value={formData.color}
                name="color"
                onChange={handlechange}>
                <option value="">Select Color</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex gap-6 sm:flex-wrap">
            {[ { label: "Weight (kg)", field: "Weight" },
  { label: "Length (cm)", field: "Length" },
  { label: "Width (cm)", field: "Width" },].map((item, idx) => (
              <div key={idx} className="flex flex-col w-1/3 sm:w-full">
                <label className="font-semibold text-md mb-2">{item.label}</label>
                <input
                  type="number"
                  placeholder={`Enter ${item.label}`}
                  value={formData[item.field] || ""}
                  name={item.field}
                  onChange={handlechange}
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
              border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"   value={formData.Description}
                name="Description"
                onChange={handlechange}
              />
          </div>
          
        </div>

      {/* Price & Availability Section */}
      <div className="bg-white p-6 border border-gray rounded-xl w-full">
        <h1 className="font-semibold text-xl mb-4">Price & Availability</h1>
        <div className="border-b border-gray mb-6"></div>

        <div className="flex gap-6 sm:flex-wrap">
          {[    { label: "Price ($)", field: "Price" },
    { label: "Stock Quantity", field: "StockQuantity" },
    { label: "Discount (%)", field: "Discount" },
].map((item, idx) => (
              <div key={idx} className="flex flex-col w-1/3 sm:w-full">
              <label className="font-semibold text-md mb-2">{item.label}</label>
              <input
                type="number"
                placeholder={`Enter ${item.label}`}
                value={formData[item.field] || ""}
                name={item.field}
                onChange={handlechange}
                className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"
                />
            </div>
          ))}
        </div>
        <br />
        <div className="flex  gap-6 sm:flex-wrap">
            <div className="flex flex-col w-1/2 sm:w-full">


            <label >Stock Quality</label>
          <div className="flex items-center  overflow-hidden border-2 outline-none border-gray w-90 h-14">
            <button className="border-r border-gray " type="button" onClick={handleDecrease} value={formData.StockQuality}
                name="StockQuality"
                onChange={handlechange}>   <HiOutlineMinusSmall className="w-10 h-8" /> </button>
           <input type="number" placeholder="1"     className="outline-none w-full text-center" onChange={(e)=>setCount(Number(e.target.value))} value={count} min={1}/> <button className="border-l border-gray " type="button" onClick={handleIncrease}><IoIosAdd className="w-10 h-8" /></button>
          </div>
            </div>
   
            <div className="flex flex-col w-1/2 sm:w-full">
              <label className="font-semibold text-md mb-2">Availability Status </label>
              <select className="border w-full h-12 p-2 rounded-lg outline-none transition-all duration-300 
                                 border-gray hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)]"    value={formData.Availability}
                name="Availability"
                onChange={handlechange}>
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
       <input type="file" className="hidden" 
        name="images"
        onChange={handleImage}
       
       />
</label>
    
        </div>
        <br />
<br />
                          
      </div>
      <div className="flex justify-end gap-2">


      {/* <button className="border outline-none bg-white text-black hover:bg-gray border-gray transition-all duration-300 rounded-xl w-20 h-12 ">Draft</button> */}

          <button type="submit" className="border outline-none bg-primary text-white hover:bg-hower border-gray transition-all duration-300 rounded-xl w-32 h-12 ">Publish Product</button>
      </div>
          </form>
    </section> 
  );
};

export default Product;
