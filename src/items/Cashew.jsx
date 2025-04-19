import React from 'react';

const Cashew = () => {
  const cauliflowerDetails = {
    name: "Cashew",
    price: 8.69,
    quantity: 56,
    unit: "units",
    expiry: "2023-12-15",
    category: "Brassica Vegetables",
    supplier: "White Harvest Farms",
    sku: "VEG-CAULI-006",
    status: "In Stock",
    description: "Fresh white cauliflower heads, firm and compact with bright green leaves. Rich in antioxidants and fiber.",
    variety: "Snowball",
    weight: "1.5-2.5 lbs each",
    storage: "Refrigerate unwashed in perforated bag",
    shelfLife: "1-2 weeks",
    organic: true
  };

  return (
    <div className="bg-stone-50 min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="mb-6 bg-white rounded-lg p-4 shadow-sm border border-stone-200 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-stone-800 flex items-center">
          <span className="bg-stone-100 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </span>
          Brassica Inventory
        </h1>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto border border-stone-200">
        {/* Product Header */}
        <div className="bg-gradient-to-r from-stone-600 to-stone-700 p-4">
          <div className="flex items-center">
            <div className="bg-white/20 text-white p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-white">{cauliflowerDetails.name}</h2>
              <p className="text-stone-100 text-sm">{cauliflowerDetails.variety}</p>
            </div>
            <div className="flex items-center space-x-2">
              {cauliflowerDetails.organic && (
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                  Organic
                </span>
              )}
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                cauliflowerDetails.status === "In Stock" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-amber-100 text-amber-800"
              }`}>
                {cauliflowerDetails.status}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-100">
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-stone-600 font-medium">Price</p>
            <p className="text-lg font-bold text-stone-800">${cauliflowerDetails.price.toFixed(2)}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-stone-600 font-medium">Quantity</p>
            <p className="text-lg font-bold text-stone-800">{cauliflowerDetails.quantity} {cauliflowerDetails.unit}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-stone-600 font-medium">Avg Weight</p>
            <p className="text-sm font-medium text-stone-800">{cauliflowerDetails.weight}</p>
          </div>
          <div className="bg-white p-3 text-center">
            <p className="text-xs text-stone-600 font-medium">SKU</p>
            <p className="text-sm font-mono text-stone-800">{cauliflowerDetails.sku}</p>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-stone-800 mb-1">DESCRIPTION</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-50/50 p-3 rounded-lg">
              <h4 className="text-xs font-medium text-stone-600 mb-1">SHELF LIFE</h4>
              <p className="text-sm font-medium text-stone-800">{cauliflowerDetails.shelfLife}</p>
            </div>
            <div className="bg-stone-50/50 p-3 rounded-lg">
              <h4 className="text-xs font-medium text-stone-600 mb-1">STORAGE</h4>
              <p className="text-sm text-stone-800">{cauliflowerDetails.storage}</p>
            </div>
          </div>

          <div className="bg-stone-50/30 p-3 rounded-lg">
            <div className="flex justify-between">
              <div>
                <h4 className="text-xs font-medium text-stone-600 mb-1">SUPPLIER</h4>
                <p className="text-sm font-medium text-stone-800">{cauliflowerDetails.supplier}</p>
              </div>
              <div>
                <h4 className="text-xs font-medium text-stone-600 mb-1">EXPIRY</h4>
                <p className="text-sm font-medium text-stone-800">{cauliflowerDetails.expiry}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Handling Notice */}
        {cauliflowerDetails.organic && (
          <div className="bg-green-50/50 px-4 py-2 border-t border-green-100">
            <div className="flex items-center text-sm text-green-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certified Organic - Handle separately from conventional produce
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="bg-stone-50 px-4 py-3 flex justify-end space-x-3 border-t border-stone-200">

        </div>
      </div>
    </div>
  );
};

export default Cashew;