import React from 'react';

const Tomat = () => {
  const tomatoDetails = {
    name: "Tomato",
    price: 2.99,
    quantity: 150,
    unit: "lbs",
    expiry: "2023-12-15",
    category: "Vegetables",
    supplier: "Fresh Farms Co.",
    sku: "VEG-TOMATO-001",
    status: "In Stock",
    description: "Fresh vine-ripened tomatoes, perfect for salads, sauces, and cooking."
  };

  return (
    <div className="bg-gradient-to-br from-red-50 to-yellow-50 min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-red-600">Inventory Management</h1>
        <p className="text-red-600/90">Product Details</p>
      </header>

      {/* Product Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto border border-red-100/50">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-red-400 to-red-600 p-6">
          <div className="flex items-center">
            <div className="bg-white/20 text-white p-3 rounded-full mr-4 border-2 border-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{tomatoDetails.name}</h2>
              <p className="text-white/90">{tomatoDetails.category}</p>
            </div>
            <span className={`ml-auto px-4 py-1.5 rounded-full text-sm font-semibold ${
              tomatoDetails.status === "In Stock" 
                ? "bg-green-100/90 text-green-800" 
                : "bg-amber-100 text-amber-800"
            }`}>
              {tomatoDetails.status}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-red-50/60 p-5 rounded-xl border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{tomatoDetails.description}</p>
            </div>

            <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-100">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Supplier Information</h3>
              <p className="text-gray-700">{tomatoDetails.supplier}</p>
              <div className="mt-4 flex items-center space-x-2">
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-amber-700 border border-amber-200">
                  Certified Supplier
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-inner">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Inventory Data</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50/40 p-3 rounded-lg">
                  <h4 className="text-xs font-medium text-red-600 uppercase tracking-wider">Price</h4>
                  <p className="text-2xl font-bold text-red-700 mt-1">${tomatoDetails.price.toFixed(2)}</p>
                </div>
                <div className="bg-green-50/40 p-3 rounded-lg">
                  <h4 className="text-xs font-medium text-green-600 uppercase tracking-wider">Quantity</h4>
                  <p className="text-2xl font-bold text-green-700 mt-1">{tomatoDetails.quantity} {tomatoDetails.unit}</p>
                </div>
                <div className="bg-blue-50/40 p-3 rounded-lg">
                  <h4 className="text-xs font-medium text-blue-600 uppercase tracking-wider">Expiry Date</h4>
                  <p className="text-xl font-medium text-blue-700 mt-1">{tomatoDetails.expiry}</p>
                </div>
                <div className="bg-purple-50/40 p-3 rounded-lg">
                  <h4 className="text-xs font-medium text-purple-600 uppercase tracking-wider">SKU</h4>
                  <p className="text-lg font-mono text-purple-700 mt-1">{tomatoDetails.sku}</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50/60 p-5 rounded-xl border border-yellow-100">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Storage Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Store at 45-55°F (7-13°C)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Keep away from direct sunlight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Do not refrigerate until ripe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 px-6 py-4 flex justify-end space-x-4 border-t border-red-100/50">

        </div>
      </div>
    </div>
  );
};

export default Tomat;