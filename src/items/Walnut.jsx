import React from 'react';

const Walnut = () => {
  const walnutDetails = {
    name: "Walnuts",
    price: 9.99,
    quantity: 42,
    unit: "bags",
    expiry: "2024-04-15",
    category: "Premium Nuts",
    supplier: "Orchard Crown Foods",
    sku: "NUT-WALNT-011",
    status: "In Stock",
    description: "Premium shelled walnut halves. Rich in omega-3s and antioxidants. 12oz resealable bags.",
    type: "Shelled Halves",
    origin: "California, USA",
    shelfLife: "8 months",
    storage: "Refrigerate in airtight container",
    grade: "Grade A",
    organic: true
  };

  return (
    <div className="bg-amber-50 min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between max-w-md mx-auto">
        <h1 className="text-xl font-bold text-amber-800 flex items-center">
          <span className="bg-amber-100 p-1.5 rounded-lg mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </span>
          Premium Nut Inventory
        </h1>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          walnutDetails.status === "In Stock" 
            ? "bg-green-100 text-green-800" 
            : "bg-amber-100 text-amber-800"
        }`}>
          {walnutDetails.status}
        </span>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-amber-100 max-w-md mx-auto">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-800 p-3">
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white flex-grow">{walnutDetails.name}</h2>
            {walnutDetails.organic && (
              <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs border border-white/30">
                Organic
              </span>
            )}
          </div>
          <p className="text-amber-100 text-xs mt-1">{walnutDetails.type} • {walnutDetails.grade}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-0.5 p-1 bg-amber-50">
          <div className="bg-white p-2 text-center">
            <p className="text-xs text-amber-600 font-medium">Price</p>
            <p className="text-base font-bold text-amber-800">${walnutDetails.price.toFixed(2)}</p>
          </div>
          <div className="bg-white p-2 text-center">
            <p className="text-xs text-amber-600 font-medium">Qty</p>
            <p className="text-base font-bold text-amber-800">{walnutDetails.quantity}</p>
          </div>
          <div className="bg-white p-2 text-center">
            <p className="text-xs text-amber-600 font-medium">Expiry</p>
            <p className="text-xs font-medium text-amber-800">{walnutDetails.expiry}</p>
          </div>
        </div>

        {/* Health Badge */}
        <div className="bg-green-50 px-3 py-1.5 flex items-center justify-center border-y border-green-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-green-800">Rich in Omega-3 & Antioxidants</span>
        </div>

        {/* Description */}
        <div className="p-3 border-b border-amber-100">
          <p className="text-sm text-gray-700">{walnutDetails.description}</p>
        </div>

        {/* Details */}
        <div className="p-3 grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-amber-600 font-medium">Origin</p>
            <p className="text-sm text-gray-800">{walnutDetails.origin}</p>
          </div>
          <div>
            <p className="text-xs text-amber-600 font-medium">Shelf Life</p>
            <p className="text-sm text-gray-800">{walnutDetails.shelfLife}</p>
          </div>
          <div>
            <p className="text-xs text-amber-600 font-medium">Storage</p>
            <p className="text-sm text-gray-800">{walnutDetails.storage}</p>
          </div>
          <div>
            <p className="text-xs text-amber-600 font-medium">SKU</p>
            <p className="text-sm font-mono text-gray-800">{walnutDetails.sku}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-amber-50 px-3 py-2 flex justify-between border-t border-amber-100">
          <button className="text-xs text-amber-700 underline hover:text-amber-800">
            View Certifications
          </button>
          <div className="flex space-x-2">
      
          </div>
        </div>
      </div>

      {/* Supplemental Info */}
      <div className="mt-3 text-center text-xs text-gray-500 max-w-md mx-auto">
        <p>Supplier: {walnutDetails.supplier} • Last stocked: 2023-11-01</p>
      </div>
    </div>
  );
};

export default Walnut;