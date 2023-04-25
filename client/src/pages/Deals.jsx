import React from "react";
import { pc1, pc2, pc3, pc4, pc5, pc6, pc7, pc8 } from '../assets';

const products = [
    {
      id: 1,
      name: 'Product 1',
      image: pc1,
      price: 9.99,
      discount: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      image: pc2,
      price: 19.99,
      discount: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      image: pc3,
      price: 29.99,
      discount: 30,
    },
    {
      id: 4,
      name: 'Product 4',
      image: pc4,
      price: 39.99,
      discount: 40,
    },
    {
      id: 5,
      name: 'Product 5',
      image: pc5,
      price: 49.99,
      discount: 50,
    },
    {
        id: 6,
        name: 'Product 6',
        image: pc6,
        price: 49.99,
        discount: 50,
      },
      {
        id: 7,
        name: 'Product 7',
        image: pc7,
        price: 49.99,
        discount: 50,
      },
      {
        id: 8,
        name: 'Product 8',
        image: pc8,
        price: 49.99,
        discount: 50,
      },
  ];
  
  

const Deals = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-green-300">Discounts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg">
            <div className="relative pb-2/3">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />

              
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <div className="flex items-baseline mt-2">
                <span className="text-gray-600 font-semibold text-sm">
                  ${product.price}
                </span>
                <span className="mx-2 text-gray-400 text-sm line-through">
                  ${product.price + product.discount}
                </span>
                <span className="text-green-500 font-semibold text-sm">
                  {product.discount}% off
                </span>
              </div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;