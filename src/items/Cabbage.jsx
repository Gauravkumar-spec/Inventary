import React from 'react';

const Cabbage = () => {
  const cabbageDetails = {
    name: "Cabbage",
    price: 1.29,
    quantity: 78,
    unit: "units",
    expiry: "2023-12-10",
    category: "Leafy Vegetables",
    supplier: "Green Valley Produce",
    sku: "VEG-CABBAGE-005",
    status: "In Stock",
    description: "Fresh green cabbage, crisp and perfect for salads, slaws, and cooking. Locally grown.",
    variety: "Green Round",
    weight: "2-3 lbs each",
    storage: "Refrigerate in crisper drawer",
    shelfLife: "2-3 weeks"
  };

  return (
    <div className="bg-green-50 min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="mb-6 bg-white rounded-lg p-4 shadow-sm border border-green-100 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-green-800 flex items-center">
          <span className="bg-green-100 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </span>
          Vegetable Inventory
        </h1>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto border border-green-100">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
          <div className="flex items-center">
            <div className="bg-white/20 text-white p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-white">{cabbageDetails.name}</h2>
              <p className="text-green-100 text-sm">{cabbageDetails.variety}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              cabbageDetails.status === "In Stock" 
                ? "bg-green-100 text-green-800" 
                : "bg-amber-100 text-amber-800"
            }`}>
              {cabbageDetails.status}
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-green-100">
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-green-600 font-medium">Price</p>
            <p className="text-lg font-bold text-green-800">${cabbageDetails.price.toFixed(2)}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-green-600 font-medium">Quantity</p>
            <p className="text-lg font-bold text-green-800">{cabbageDetails.quantity} {cabbageDetails.unit}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-green-600 font-medium">Avg Weight</p>
            <p className="text-sm font-medium text-green-800">{cabbageDetails.weight}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-green-600 font-medium">SKU</p>
            <p className="text-sm font-mono text-green-800">{cabbageDetails.sku}</p>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-green-800 mb-1">DESCRIPTION</h3>
            <p className="text-sm text-gray-700">{cabbageDetails.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50/50 p-3 rounded-lg">
              <h4 className="text-xs font-medium text-green-600 mb-1">SHELF LIFE</h4>
              <p className="text-sm font-medium text-green-800">{cabbageDetails.shelfLife}</p>
            </div>
            <div className="bg-green-50/50 p-3 rounded-lg">
              <h4 className="text-xs font-medium text-green-600 mb-1">STORAGE</h4>
              <p className="text-sm text-green-800">{cabbageDetails.storage}</p>
            </div>
          </div>

          <div className="bg-green-50/30 p-3 rounded-lg">
            <div className="flex justify-between">
              <div>
                <h4 className="text-xs font-medium text-green-600 mb-1">SUPPLIER</h4>
                <p className="text-sm font-medium text-green-800">{cabbageDetails.supplier}</p>
              </div>
              <div>
                <h4 className="text-xs font-medium text-green-600 mb-1">EXPIRY</h4>
                <p className="text-sm font-medium text-green-800">{cabbageDetails.expiry}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-green-50 px-4 py-3 flex justify-end space-x-3 border-t border-green-100">

        </div>
      </div>
    </div>
  );
};

export default Cabbage;