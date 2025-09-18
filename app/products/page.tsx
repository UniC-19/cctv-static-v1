'use client';

import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const businessProducts: Product[] = [
  {
    id: 1,
    name: 'Business CCTV Pro',
    image: '/cctv1.jpg',
    description: 'High-definition CCTV for large offices.',
  },
  {
    id: 2,
    name: 'Warehouse CCTV',
    image: '/cctv4.jpg',
    description: 'Wide-angle coverage for warehouses.',
  },
  {
    id: 3,
    name: 'Retail CCTV',
    image: '/cctvProduct2.jpeg',
    description: 'Monitor your shop with clarity.',
  },
  {
    id: 4,
    name: 'Business CCTV Pro',
    image: '/cctvProduct1.jpeg',
    description: 'High-definition CCTV for large offices.',
  },
  {
    id: 5,
    name: 'Warehouse CCTV',
    image: '/cctv2.png',
    description: 'Wide-angle coverage for warehouses.',
  },
  {
    id: 6,
    name: 'Retail CCTV',
    image: '/cctvProduct3.jpeg',
    description: 'Monitor your shop with clarity.',
  },
];

const homeProducts: Product[] = [
  {
    id: 1,
    name: 'Home CCTV Basic',
    image: '/cctv1.jpg',
    description: 'Affordable security for your home.',
  },
  {
    id: 2,
    name: 'Home CCTV Smart',
    image: '/cctv4.jpg',
    description: 'Smart CCTV with mobile alerts.',
  },
  {
    id: 3,
    name: 'Home CCTV Premium',
    image: '/cctv3.jpg',
    description: 'Top-tier security for modern homes.',
  },
  {
    id: 4,
    name: 'Home CCTV Basic',
    image: '/cctvhomeProduct3.jpeg',
    description: 'Affordable security for your home.',
  },
  {
    id: 5,
    name: 'Home CCTV Smart',
    image: '/cctvhomeProduct2.jpeg',
    description: 'Smart CCTV with mobile alerts.',
  },
  {
    id: 6,
    name: 'Home CCTV Premium',
    image: '/cctvhomeProduct1.jpeg',
    description: 'Top-tier security for modern homes.',
  },
];

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState<'business' | 'home'>('business');

  const products = activeTab === 'business' ? businessProducts : homeProducts;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-300 pt-20 text-black">
      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          className={`px-6 py-2 rounded-full font-medium transition ${
            activeTab === 'business'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('business')}
        >
          CCTV for Business
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium transition ${
            activeTab === 'home'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('home')}
        >
          CCTV for Home
        </button>
      </div>

      {/* Grid View */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
