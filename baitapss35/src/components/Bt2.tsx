import React, { useState } from 'react';

// Define the structure of the Product object
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ProductDisplay: React.FC = () => {
    // Initialize the state with a product object
    const [product, setProduct] = useState<Product>({
        id: 1,
        name: 'Example Product',
        price: 19.99,
        quantity: 100
    });

    return (
        <div>
            <p>Product Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    );
}

export default ProductDisplay;
