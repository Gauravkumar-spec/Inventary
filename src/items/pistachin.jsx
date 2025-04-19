import React from 'react';

const Pistachin = () => {
  const pistachioDetails = {
    name: "Pistachios",
    price: 12.99,
    quantity: 56,
    unit: "bags",
    expiry: "2024-05-20",
    category: "Nuts & Snacks",
    supplier: "Golden Nut Orchards",
    sku: "NUT-PISTA-010",
    status: "Out Of Stock",
    description: "Premium roasted & salted pistachios in shell. Rich in protein and fiber. 16oz resealable bags.",
    type: "In-Shell",
    origin: "California, USA",
    shelfLife: "9 months",
    storage: "Cool, dry place. Refrigerate after opening.",
    flavor: "Sea Salt",
    organic: false,
    size: "Jumbo"
  };

  return (
    <div className="bg-amber-50 min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold text-green-800 flex items-center">
          <span className="bg-green-100 p-1.5 rounded-lg mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </span>
          Nut Inventory
        </h1>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          pistachioDetails.status === "In Stock" 
            ? "bg-green-100 text-green-800" 
            : "bg-amber-100 text-amber-800"
        }`}>
          {pistachioDetails.status}
        </span>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-green-100 max-w-md mx-auto">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-3">
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white flex-grow">{pistachioDetails.name}</h2>
            <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">
              {pistachioDetails.size}
            </span>
          </div>
          <p className="text-green-100 text-xs mt-1">{pistachioDetails.type} • {pistachioDetails.flavor}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-0.5 p-1 bg-green-50">
          <div className="bg-white p-2 text-center">
            <p className="text-xs text-green-600 font-medium">Price</p>
            <p className="text-base font-bold text-green-800">${pistachioDetails.price.toFixed(2)}</p>
          </div>
          <div className="bg-white p-2 text-center">
            <p className="text-xs text-green-600 font-medium">Qty</p>
            <p className="text-base font-bold text-green-800">{pistachioDetails.quantity}</p>
          </div>
          <div className="bg-white p-2 text-center">
            <p className="text-xs text-green-600 font-medium">Expiry</p>
            <p className="text-xs font-medium text-green-800">{pistachioDetails.expiry}</p>
          </div>
        </div>

        {/* Description */}
        <div className="p-3 border-b border-green-100">
          <p className="text-sm text-gray-700">{pistachioDetails.description}</p>
        </div>

        {/* Details */}
        <div className="p-3 grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-green-600 font-medium">Origin</p>
            <p className="text-sm text-gray-800">{pistachioDetails.origin}</p>
          </div>
          <div>
            <p className="text-xs text-green-600 font-medium">Shelf Life</p>
            <p className="text-sm text-gray-800">{pistachioDetails.shelfLife}</p>
          </div>
          <div>
            <p className="text-xs text-green-600 font-medium">Storage</p>
            <p className="text-sm text-gray-800">{pistachioDetails.storage}</p>
          </div>
          <div>
            <p className="text-xs text-green-600 font-medium">SKU</p>
            <p className="text-sm font-mono text-gray-800">{pistachioDetails.sku}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-green-50 px-3 py-2 flex justify-between border-t border-green-100">
          <button className="text-xs text-green-700 underline hover:text-green-800">
            More Details
          </button>
          <div className="flex space-x-2">
     
          </div>
        </div>
      </div>

      {/* Supplemental Info */}
      <div className="mt-3 text-center text-xs text-gray-500">
        <p>Supplier: {pistachioDetails.supplier} • Last updated: 2023-11-05</p>
      </div>
    </div>
  );
};

export default Pistachin;