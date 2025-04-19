import React from 'react';

const Almond = () => {
  const almondDetails = {
    name: "Almonds",
    price: 8.99,
    quantity: 42,
    unit: "lbs",
    expiry: "2024-05-30",
    category: "Tree Nuts",
    supplier: "Golden Orchard Farms",
    sku: "NUT-ALMOND-004",
    status: "In Stock",
    description: "Premium California almonds, raw and unsalted. High in vitamin E and healthy fats.",
    type: "Nonpareil",
    origin: "California, USA",
    shelfLife: "9 months",
    storage: "Cool, dry place in airtight container"
  };

  return (
    <div className="bg-amber-50 min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="mb-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-amber-100 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-amber-800 flex items-center">
          <span className="bg-amber-100 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </span>
          Almond Inventory
        </h1>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto border border-amber-100">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white flex-grow">{almondDetails.name}</h2>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              almondDetails.quantity < 50 
                ? "bg-amber-100 text-amber-800" 
                : "bg-green-100 text-green-800"
            }`}>
              {almondDetails.quantity < 50 ? "Low Stock" : almondDetails.status}
            </span>
          </div>
          <p className="text-amber-100 text-sm mt-1">{almondDetails.type} • {almondDetails.origin}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-px bg-amber-100">
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-amber-600 font-medium">Price</p>
            <p className="text-lg font-bold text-amber-800">${almondDetails.price.toFixed(2)}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-amber-600 font-medium">Quantity</p>
            <p className="text-lg font-bold text-amber-800">{almondDetails.quantity}{almondDetails.unit}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-amber-600 font-medium">Expiry</p>
            <p className="text-sm font-medium text-amber-800">{almondDetails.expiry}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-amber-600 font-medium">SKU</p>
            <p className="text-sm font-mono text-amber-800">{almondDetails.sku}</p>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-amber-800 mb-1">DESCRIPTION</h3>
            <p className="text-sm text-gray-700">{almondDetails.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50/50 p-3 rounded-lg">
              <h4 className="text-xs font-medium text-amber-600 mb-1">SHELF LIFE</h4>
              <p className="text-sm font-medium text-amber-800">{almondDetails.shelfLife}</p>
            </div>
            <div className="bg-amber-50/50 p-3 rounded-lg">
              <h4 className="text-xs font-medium text-amber-600 mb-1">STORAGE</h4>
              <p className="text-sm text-amber-800">{almondDetails.storage}</p>
            </div>
          </div>

          <div className="bg-amber-50/30 p-3 rounded-lg">
            <h4 className="text-xs font-medium text-amber-600 mb-1">SUPPLIER</h4>
            <p className="text-sm font-medium text-amber-800">{almondDetails.supplier}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-amber-50 px-4 py-3 flex justify-end space-x-3 border-t border-amber-100">
          <button className="px-4 py-2 text-sm border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-100">
            Edit Details
          </button>
          <button className="px-4 py-2 text-sm bg-amber-600 text-white rounded-lg hover:bg-amber-700">
            Order More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Almond;