import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleInvoice = () => {
  const { _id } = useParams(); // get invoice id from URL
  const [invoice, setInvoice] = useState(null);

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

  return (
    <section className="m-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Invoice #{invoice.InvoiceNumber}</h1>

      <div className="flex justify-between mb-4">
        <div>
          <h2 className="font-semibold text-lg">Customer:</h2>
          <p>{invoice.CustomerName}</p>
          <p>{invoice.CustomerAddress}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Dates:</h2>
          <p>Issued: {invoice.IssueDate}</p>
          <p>Due: {invoice.DueDate}</p>
        </div>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Products</h3>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Unit Price</th>
            <th className="p-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.Products.map((p, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{p.ProductName}</td>
              <td className="border p-2">{p.Quantity}</td>
              <td className="border p-2">{p.Price}</td>
              <td className="border p-2">{p.Price * p.Quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-right">
        <h3 className="font-bold text-xl">
          Total:{" "}
          {invoice.Products.reduce(
            (sum, p) => sum + p.Price * p.Quantity,
            0
          )}
        </h3>
      </div>
    </section>
  );
};

export default SingleInvoice;
