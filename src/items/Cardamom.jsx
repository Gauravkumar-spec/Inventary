import React from 'react';

const Cardamom = () => {
  const cardamomDetails = {
    name: "Cardamom",
    price: 24.99,
    quantity: 38,
    unit: "lbs",
    expiry: "2025-06-30",
    category: "Spices",
    supplier: "Royal Spice Traders",
    sku: "SPI-CARD-008",
    status: "Low Stock",
    description: "Premium green cardamom pods, freshly harvested. Aromatic with intense flavor. Perfect for both sweet and savory dishes.",
    type: "Green Cardamom",
    origin: "Guatemala",
    shelfLife: "2 years",
    storage: "Airtight container in cool, dark place",
    grade: "A+",
    organic: true
  };

  return (
    <div className="bg-emerald-50 min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="mb-6 bg-white rounded-lg p-4 shadow-sm border border-emerald-100 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-emerald-800 flex items-center">
          <span className="bg-emerald-100 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </span>
          Premium Spice Inventory
        </h1>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto border border-emerald-100">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 p-4">
          <div className="flex items-center">
            <div className="bg-white/20 text-white p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-white">{cardamomDetails.name}</h2>
              <p className="text-emerald-100 text-sm">{cardamomDetails.type}</p>
            </div>
            <div className="flex items-center space-x-2">
              {cardamomDetails.organic && (
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                  Organic
                </span>
              )}
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                cardamomDetails.status === "In Stock" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-amber-100 text-amber-800"
              }`}>
                {cardamomDetails.status}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-emerald-100">
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-emerald-600 font-medium">Price</p>
            <p className="text-lg font-bold text-emerald-800">${cardamomDetails.price.toFixed(2)}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-emerald-600 font-medium">Quantity</p>
            <p className="text-lg font-bold text-emerald-800">{cardamomDetails.quantity} {cardamomDetails.unit}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-emerald-600 font-medium">Grade</p>
            <p className="text-lg font-bold text-amber-600">{cardamomDetails.grade}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-emerald-600 font-medium">SKU</p>
            <p className="text-sm font-mono text-emerald-800">{cardamomDetails.sku}</p>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="p-4 space-y-4">
          <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">
            <h3 className="text-sm font-semibold text-emerald-800 mb-2">DESCRIPTION</h3>
            <p className="text-sm text-gray-700">{cardamomDetails.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100">
              <h4 className="text-xs font-medium text-amber-600 mb-1">ORIGIN</h4>
              <p className="text-sm font-medium text-amber-800">{cardamomDetails.origin}</p>
            </div>
            <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
              <h4 className="text-xs font-medium text-emerald-600 mb-1">SHELF LIFE</h4>
              <p className="text-sm font-medium text-emerald-800">{cardamomDetails.shelfLife}</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-emerald-100">
            <h4 className="text-xs font-medium text-emerald-600 mb-1">STORAGE INSTRUCTIONS</h4>
            <p className="text-sm text-gray-700">{cardamomDetails.storage}</p>
            <div className="mt-2 flex items-center text-xs text-emerald-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Proper storage maintains aroma and flavor
            </div>
          </div>

          <div className="bg-emerald-50/30 p-3 rounded-lg border border-emerald-100">
            <div className="flex justify-between">
              <div>
                <h4 className="text-xs font-medium text-emerald-600 mb-1">SUPPLIER</h4>
                <p className="text-sm font-medium text-emerald-800">{cardamomDetails.supplier}</p>
              </div>
              <div>
                <h4 className="text-xs font-medium text-emerald-600 mb-1">EXPIRY</h4>
                <p className="text-sm font-medium text-emerald-800">{cardamomDetails.expiry}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-emerald-50 px-4 py-3 flex justify-end space-x-3 border-t border-emerald-100">
  
        </div>
      </div>
    </div>
  );
};

export default Cardamom;