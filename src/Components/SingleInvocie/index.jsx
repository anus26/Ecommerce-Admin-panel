import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleInvoice = () => {
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
  const totalPrice=invoice.Products.reduce((acc,item)=>{
    return acc+item.Price*item.StockQuantity
  },0)
  const totalvat=invoice.Products.reduce((acc,item)=>{
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
              <div key={index} className="flex border-b p-2">
              <h1 className="w-[5%]">{index + 1}</h1>
              <h1 className="w-[20%]">{p.ProductName}</h1>
              <h1 className="w-[20%]">{p.StockQuantity}</h1>
              <h1 className="w-[20%]">{p.Price}</h1>
              <h1 className="w-[20%]">{p.  Discount}</h1>
              <h1 className="w-[5%]">{p.Price*p.StockQuantity/p.Discount}</h1>
            </div>

          ))}

   
                          </div>
                              <div>
                <h1>Order summary</h1>
                <div>
                  <h1>Sub Total <span>{totalPrice}</span></h1>
                  <h1>Vat(10%) <span>{totalvat}</span></h1>

                </div>
                <div className="flex gap-5">
                  <h1>Total <span>{totalPrice+totalvat}</span></h1>
                  <h1></h1>
                </div>
              </div>
      

      {/* <div className="mt-6 text-right">
        <h3 className="font-bold text-xl">
          Total:{" "}
          {invoice.Products.reduce(
              (sum, p) => sum + p.Price * p.Quantity,
              0
            )}
        </h3>


      </div> */}
              
                          </div>
                      </div>
    </section>
);
};

export default SingleInvoice;
