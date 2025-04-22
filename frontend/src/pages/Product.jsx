import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productid } = useParams(); // Extract productid from the URL

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {productid}</p> {/* Displaying the product ID */}
    </div>
  );
};

export default Product;
