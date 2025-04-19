import React from 'react';

const Potato = () => {
  const potatoDetails = {
    name: "Potato",
    price: 1.49,
    quantity: 320,
    unit: "lbs",
    expiry: "2024-02-28",
    category: "Root Vegetables",
    supplier: "Harvest Valley Farms",
    sku: "VEG-POTATO-002",
    status: "In Stock",
    description: "Fresh russet potatoes, ideal for baking, mashing, and frying. High starch content for perfect fluffy texture.",
    varieties: ["Russet", "Yukon Gold", "Red Bliss"],
    storage: "Cool, dark place (45-50°F)"
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-stone-50 min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h1 className="text-3xl font-bold text-blue-800">Inventory Management</h1>
        <p className="text-stone-600">Root Vegetable Details</p>
      </header>

      {/* Product Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto border border-stone-200">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
          <div className="flex items-center">
            <div className="bg-white/20 text-white p-3 rounded-full mr-4 border-2 border-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{potatoDetails.name}</h2>
              <p className="text-white/90">{potatoDetails.category}</p>
            </div>
            <span className={`ml-auto px-4 py-1.5 rounded-full text-sm font-semibold ${
              potatoDetails.status === "In Stock" 
                ? "bg-green-100/90 text-green-800" 
                : "bg-amber-100 text-amber-800"
            }`}>
              {potatoDetails.status}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Description</h3>
              <p className="text-stone-700 leading-relaxed">{potatoDetails.description}</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-blue-700 mb-2">Available Varieties:</h4>
                <div className="flex flex-wrap gap-2">
                  {potatoDetails.varieties.map((variety, index) => (
                    <span key={index} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                      {variety}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-stone-50/60 p-5 rounded-xl border border-stone-200">
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Supplier Information</h3>
              <p className="text-stone-700">{potatoDetails.supplier}</p>
              <div className="mt-4 flex items-center space-x-2">
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-stone-700 border border-stone-300">
                  Organic Certified
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                  Local Grower
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-inner">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Inventory Data</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50/40 p-3 rounded-lg">
                  <h4 className="text-xs font-medium text-blue-600 uppercase tracking-wider">Price</h4>
                  <p className="text-2xl font-bold text-blue-700 mt-1">${potatoDetails.price.toFixed(2)}</p>
                </div>
                <div className="bg-green-50/40 p-3 rounded-lg">
                  <h4 className="text-xs font-medium text-green-600 uppercase tracking-wider">Quantity</h4>
                  <p className="text-2xl font-bold text-green-700 mt-1">{potatoDetails.quantity} {potatoDetails.unit}</p>
                </div>
                <div className="bg-amber-50/40 p-3 rounded-lg">
                  <h4 className="text-xs font-medium text-amber-600 uppercase tracking-wider">Expiry Date</h4>
                  <p className="text-xl font-medium text-amber-700 mt-1">{potatoDetails.expiry}</p>
                </div>
                <div className="bg-purple-50/40 p-3 rounded-lg">
                  <h4 className="text-xs font-medium text-purple-600 uppercase tracking-wider">SKU</h4>
                  <p className="text-lg font-mono text-purple-700 mt-1">{potatoDetails.sku}</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-100/60 p-5 rounded-xl border border-stone-300">
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Storage Information</h3>
              <div className="bg-white/80 p-3 rounded-lg mb-3">
                <p className="text-sm font-medium text-stone-700">{potatoDetails.storage}</p>
              </div>
              <ul className="space-y-2 text-stone-700">
                <li className="flex items-start">
                  <span className="text-stone-600 mr-2">•</span>
                  <span>Store in well-ventilated container</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-600 mr-2">•</span>
                  <span>Keep away from onions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-600 mr-2">•</span>
                  <span>Do not wash before storage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-gradient-to-r from-blue-50 to-stone-100 px-6 py-4 flex justify-end space-x-4 border-t border-stone-200">

        </div>
      </div>
    </div>
  );
};

export default Potato;