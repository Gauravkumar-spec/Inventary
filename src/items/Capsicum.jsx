import React from 'react';

const Capsicum = () => {
  const capsicumDetails = {
    name: "Capsicum",
    price: 3.49,
    quantity: 92,
    unit: "units",
    expiry: "2023-12-18",
    category: "Nightshade Vegetables",
    supplier: "Rainbow Produce Co.",
    sku: "VEG-CAPS-007",
    status: "In Stock",
    description: "Fresh bell peppers available in multiple colors. Crisp texture and sweet flavor. High in vitamin C.",
    colors: ["Red", "Yellow", "Green", "Orange"],
    weight: "0.3-0.5 lbs each",
    storage: "Refrigerate in crisper drawer",
    shelfLife: "1-2 weeks",
    organic: false
  };

  return (
    <div className="bg-red-50 min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="mb-6 bg-white rounded-lg p-4 shadow-sm border border-red-100 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-red-800 flex items-center">
          <span className="bg-red-100 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </span>
          Pepper Inventory
        </h1>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto border border-red-100">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 p-4">
          <div className="flex items-center">
            <div className="bg-white/20 text-white p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-white">{capsicumDetails.name}</h2>
              <p className="text-white/90 text-sm">Bell Peppers</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                capsicumDetails.status === "In Stock" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-amber-100 text-amber-800"
              }`}>
                {capsicumDetails.status}
              </span>
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div className="px-4 pt-3 pb-2 bg-white border-b border-red-100">
          <h3 className="text-xs font-medium text-gray-500 mb-1">AVAILABLE COLORS</h3>
          <div className="flex space-x-2">
            {capsicumDetails.colors.map((color, index) => (
              <span 
                key={index}
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  color === "Red" ? "bg-red-100 text-red-800 border border-red-200" :
                  color === "Yellow" ? "bg-yellow-100 text-yellow-800 border border-yellow-200" :
                  color === "Green" ? "bg-green-100 text-green-800 border border-green-200" :
                  "bg-orange-100 text-orange-800 border border-orange-200"
                }`}
              >
                {color}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-red-100">
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-red-600 font-medium">Price</p>
            <p className="text-lg font-bold text-red-800">${capsicumDetails.price.toFixed(2)}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-red-600 font-medium">Quantity</p>
            <p className="text-lg font-bold text-red-800">{capsicumDetails.quantity} {capsicumDetails.unit}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-red-600 font-medium">Avg Weight</p>
            <p className="text-sm font-medium text-red-800">{capsicumDetails.weight}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-red-600 font-medium">SKU</p>
            <p className="text-sm font-mono text-red-800">{capsicumDetails.sku}</p>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-red-800 mb-1">DESCRIPTION</h3>
            <p className="text-sm text-gray-700">{capsicumDetails.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50/50 p-3 rounded-lg">
              <h4 className="text-xs font-medium text-red-600 mb-1">SHELF LIFE</h4>
              <p className="text-sm font-medium text-red-800">{capsicumDetails.shelfLife}</p>
            </div>
            <div className="bg-red-50/50 p-3 rounded-lg">
              <h4 className="text-xs font-medium text-red-600 mb-1">STORAGE</h4>
              <p className="text-sm text-red-800">{capsicumDetails.storage}</p>
            </div>
          </div>

          <div className="bg-red-50/30 p-3 rounded-lg">
            <div className="flex justify-between">
              <div>
                <h4 className="text-xs font-medium text-red-600 mb-1">SUPPLIER</h4>
                <p className="text-sm font-medium text-red-800">{capsicumDetails.supplier}</p>
              </div>
              <div>
                <h4 className="text-xs font-medium text-red-600 mb-1">EXPIRY</h4>
                <p className="text-sm font-medium text-red-800">{capsicumDetails.expiry}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-red-50 px-4 py-3 flex justify-end space-x-3 border-t border-red-100">
      
        </div>
      </div>
    </div>
  );
};

export default Capsicum;