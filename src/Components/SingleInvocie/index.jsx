import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SlPrinter } from "react-icons/sl";
const SingleInvocie = () => {
  const { _id } = useParams(); 
  const [invoice, setInvoice] = useState(null);
  const [Products,setProdcut]=useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/oneinvoice/${_id}`);
      console.log("✅ Invoice Data:", res.data.invoice);
      setInvoice(res.data.invoice);
    } catch (error) {
      console.error("❌ Fetch Error:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [_id]);

  if (!invoice) {
    return <h2 className="text-center mt-10">Loading Invoice...</h2>;
  }
  const totalPrice=invoice?.Products?.reduce((acc,item)=>{
    return acc+item.Price*item.StockQuantity
  },0)
  const totalvat=invoice?.Products?.reduce((acc,item)=>{
    return acc+item.Price/10
  },0)
  return (
    <section className="">
        <div className="m-5">
            <h1 className="font-semibold text-xl ">Invoice</h1>
            <div className="bg-white border-gray rounded-lg ">
      <h1 className="text-xl font-semibold m-5">Invoice </h1>
     <div className="border-b border-gray"></div>
      <div className="flex justify-between m-5">
        <div>
          <h2 className="font-semibold text-lg text-textt">Form</h2>
          <p>{invoice.CustomerName}</p>
          <p>{invoice.CustomerAddress}</p>
             <p>Issued: {invoice.IssueDate}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">To:</h2>
          <p className="text-textt">Issued: {invoice.IssueDate}</p>
          <p className="text-textt">Due: {invoice.DueDate}</p>
        </div>
      </div>


   
        <div className="border border-gray m-5"> 
<div className="flex border-b border-gray bg-gray p-3 rounded-sm" >

            <h1 className="w-[5%]">S.No#</h1>
            <h1 className="w-[20%] ">Product</h1>
            <h1 className=" w-[20%] ">Quantity</h1>
            <h1 className="w-[20%] ">Unit Cost</h1>
            <h1 className=" w-[20%] ">Discount</h1>
            <h1 className=" w-[5%]">Total</h1>
         
      
            </div>
          {invoice.Products.map((p, index) => (
              <div key={index} className="flex border-b border-gray p-2">
              <h1 className="w-[5%]">{index + 1}</h1>
              <h1 className="w-[20%]">{p.ProductName}</h1>
              <h1 className="w-[20%]">{p.StockQuantity}</h1>
              <h1 className="w-[20%]">{p.Price}</h1>
              <h1 className="w-[20%]">{p.  Discount}</h1>
              <h1 className="w-[5%]">{p.Price*p.StockQuantity/p.Discount}</h1>
            </div>

          ))}

   
                          </div>
<div className="flex justify-end mt-6">
  <div className="bg-gray-50 p-5 rounded-lg  w-[300px]">
    <h1 className="text-lg font-semibold mb-3  pb-2 text-left">
      Order Summary
    </h1>

    <div className="space-y-2 text-sm text-gray-700">
      <div className="flex justify-between">
        <span>Sub Total</span>
        <span className="font-medium">Rs. {totalPrice}</span>
      </div>

      <div className="flex justify-between">
        <span>VAT (10%)</span>
        <span className="font-medium">Rs. {totalvat}</span>
      </div>

      <div className=" pt-2 mt-2 flex justify-between text-base font-semibold">
        <span>Total</span>
        <span className="text-primary">Rs. {totalPrice + totalvat}</span>
      </div>
    </div>
  </div>
</div>
<div className="flex justify-end gap-4 mt-6">
  <button className="bg-white hover:bg-gray text-gray-700 font-semibold px-6 py-2 h-12 rounded-lg border border-gray transition-all duration-200">
    Proceed to Payment
  </button>

  <button className="flex items-center justify-center gap-2 bg-primary hover:bg-hower text-white font-semibold px-6 py-2 h-12 rounded-lg border border-gray transition-all duration-200">
    <SlPrinter className="text-lg" />
    Print
  </button>
</div>


      

              
                          </div>
                      </div>
    </section>
);
};

export default SingleInvocie;
