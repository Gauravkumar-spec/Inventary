import React from 'react';

const PumpkinSeeds = () => {
  const seedDetails = {
    name: "Pumpkin Seeds",
    price: 5.99,
    quantity: 24,
    unit: "bags",
    expiry: "2024-08-15",
    category: "Seeds & Snacks",
    supplier: "Harvest Crunch Co.",
    sku: "SNK-PUMPKIN-009",
    status: "Out Of Stock",
    description: "Roasted & salted pumpkin seeds. High in magnesium and zinc. 8oz resealable bags.",
    type: "Shelled",
    origin: "USA",
    shelfLife: "10 months",
    storage: "Cool, dry place. Refrigerate after opening.",
    organic: true,
    flavor: "Sea Salt"
  };

  return (
    <div className="bg-orange-50 min-h-screen p-4">
      {/* Compact Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-orange-800">
          <span className="bg-orange-100 px-2 py-1 rounded-md mr-2">⋔</span>
          Seed Inventory
        </h1>
        <span className={`px-2 py-1 rounded-md text-xs font-medium ${
          seedDetails.status === "In Stock" 
            ? "bg-green-100 text-green-800" 
            : "bg-amber-100 text-amber-800"
        }`}>
          {seedDetails.status}
        </span>
      </div>

      {/* Compact Product Card */}
      <div className="bg-white rounded-lg shadow-sm border border-orange-200 overflow-hidden">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3">
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white flex-grow">{seedDetails.name}</h2>
            {seedDetails.organic && (
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/30">
                Organic
              </span>
            )}
          </div>
          <p className="text-orange-100 text-xs mt-1">{seedDetails.type} • {seedDetails.flavor}</p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-1 p-2 bg-orange-100/30">
          <div className="bg-white p-2 rounded text-center">
            <p className="text-xs text-orange-600">Price</p>
            <p className="font-bold text-orange-800">${seedDetails.price.toFixed(2)}</p>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <p className="text-xs text-orange-600">Qty</p>
            <p className="font-bold text-orange-800">{seedDetails.quantity}</p>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <p className="text-xs text-orange-600">Expiry</p>
            <p className="text-xs font-medium text-orange-800">{seedDetails.expiry}</p>
          </div>
        </div>

        {/* Compact Details */}
        <div className="p-3 space-y-3">
          <div>
            <p className="text-sm text-gray-700">{seedDetails.description}</p>
          </div>

          <div className="flex justify-between text-xs">
            <div>
              <p className="text-orange-600 font-medium">Storage</p>
              <p className="text-gray-700">{seedDetails.storage}</p>
            </div>
            <div className="text-right">
              <p className="text-orange-600 font-medium">SKU</p>
              <p className="font-mono text-gray-700">{seedDetails.sku}</p>
            </div>
          </div>
        </div>

        {/* Mini Actions */}
        <div className="bg-orange-50 px-3 py-2 flex justify-between border-t border-orange-200">
  
        </div>
      </div>

      {/* Supplemental Info (appears on hover/focus in real implementation) */}
      <div className="mt-3 text-xs text-gray-500">
        <p>Last stocked: 2023-10-15 • Next shipment: 2023-11-10</p>
      </div>
    </div>
  );
};

export default PumpkinSeeds;