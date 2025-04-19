import React from 'react';

const Garlic = () => {
  const garlicDetails = {
    name: "Garlic",
    price: 3.99,
    quantity: 85,
    unit: "units",
    expiry: "2024-03-15",
    category: "Bulb Vegetables",
    supplier: "Pungent Valley Farms",
    sku: "VEG-GARLIC-003",
    status: "Low Stock",
    description: "Fresh organic garlic bulbs with strong flavor profile. Each unit contains 8-10 cloves.",
    storage: "Cool, dry place with ventilation"
  };

  return (
    <div className="bg-purple-50 min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="mb-6 bg-white rounded-lg p-4 shadow">
        <h1 className="text-2xl font-bold text-purple-800">Garlic Inventory</h1>
      </header>

      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
          <div className="flex items-center">
            <div className="bg-white/20 text-white p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{garlicDetails.name}</h2>
              <p className="text-white/90 text-sm">{garlicDetails.category}</p>
            </div>
            <span className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
              garlicDetails.status === "In Stock" 
                ? "bg-green-100 text-green-800" 
                : "bg-amber-100 text-amber-800"
            }`}>
              {garlicDetails.status}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 grid grid-cols-2 gap-4">
          <div className="bg-purple-50/50 p-3 rounded-lg">
            <h4 className="text-xs font-medium text-purple-600">Price</h4>
            <p className="text-xl font-bold text-purple-800">${garlicDetails.price.toFixed(2)}</p>
          </div>
          <div className="bg-green-50/50 p-3 rounded-lg">
            <h4 className="text-xs font-medium text-green-600">Quantity</h4>
            <p className="text-xl font-bold text-green-800">{garlicDetails.quantity} {garlicDetails.unit}</p>
          </div>
          <div className="bg-blue-50/50 p-3 rounded-lg">
            <h4 className="text-xs font-medium text-blue-600">Expiry</h4>
            <p className="text-lg text-blue-800">{garlicDetails.expiry}</p>
          </div>
          <div className="bg-amber-50/50 p-3 rounded-lg">
            <h4 className="text-xs font-medium text-amber-600">SKU</h4>
            <p className="text-lg text-amber-800">{garlicDetails.sku}</p>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 border-t border-purple-100">
          <h3 className="font-semibold text-purple-800 mb-2">Description</h3>
          <p className="text-sm text-gray-700">{garlicDetails.description}</p>
        </div>

        {/* Storage */}
        <div className="p-4 bg-purple-50/30">
          <h3 className="font-semibold text-purple-800 mb-1 text-sm">STORAGE</h3>
          <p className="text-sm text-gray-700">{garlicDetails.storage}</p>
        </div>

        {/* Actions */}
        <div className="p-3 bg-white border-t border-purple-100 flex justify-end space-x-3">

        </div>
      </div>
    </div>
  );
};

export default Garlic;