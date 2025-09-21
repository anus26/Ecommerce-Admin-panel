import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { _id } = useParams(); // 👈 yahan se id milegi
  const {formData,setFormData}=useState([
// ProductName:'',
// Category:''
  ])

  const onefetch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/product/${_id}`, {
        withCredentials: true,
      });
      console.log("single product", res.data);
      setProduct(res.data); // 👈 product set karna
    } catch (error) {
      console.error("❌ Fetch Product Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (_id) onefetch(); // 👈 id hone par hi fetch karna
  }, [_id]);

  return (
    <section className="p-5">
      <div className="singleproduct">
        <h1 className="text-xl font-bold mb-3">Single Product</h1>

        {product ? (
          <div className="p-4 border rounded-lg shadow-md">
            <img
              src={product.images}
              alt={product.ProductName}
              className="w-32 h-32 object-cover mb-3 rounded-lg"
            />
            <h2 className="text-lg font-semibold">{product.ProductName}</h2>
            <p>Category: {product.Category}</p>
            <p>Price: ${product.Price}</p>
            <p>Brand: {product.Brand}</p>
            <p>Stock: {product.StockQuantity}</p>
            <p>Created At: {new Date(product.createdAt).toLocaleDateString()}</p>
          </div>
        ) : (
          <p>Loading product...</p>
        )}
      </div>
    </section>
  );
};

export default SingleProduct;
