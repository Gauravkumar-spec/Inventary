

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddItem() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    expiry: "",
    price: "",
    amount: "",
    category: "Vegetables", // Added category field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories] = useState([
    "Vegetables",
    "Fruits",
    "Dairy",
    "Meat",
    "Grains",
    "Spices",
    "Other",
  ]);

  useEffect(() => {
    // Set default expiry to 7 days from today
    const defaultExpiry = new Date();
    defaultExpiry.setDate(defaultExpiry.getDate() + 7);
    const formattedDate = defaultExpiry.toISOString().split("T")[0];
    setForm((prev) => ({ ...prev, expiry: formattedDate }));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.expiry) newErrors.expiry = "Expiry date is required";
    if (!form.price || form.price <= 0)
      newErrors.price = "Price must be greater than 0";
    if (!form.amount || form.amount <= 0)
      newErrors.amount = "Quantity must be greater than 0";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleString();

      const newItem = {
        ...form,
        createdAt: formattedTime,
        id: Date.now(), // Add unique ID
      };

      const existingItems = JSON.parse(localStorage.getItem("customItems")) || [];
      const updatedItems = [...existingItems, newItem];

      localStorage.setItem("customItems", JSON.stringify(updatedItems));
      
      toast.success("Item added successfully!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      toast.error("Failed to add item");
      console.error("Error saving item:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="add-item" className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-amber-900/20">
      <h2 className="text-2xl font-semibold text-gray-300 mb-12 text-center pt-10 ">
        Add New Inventory Item
      </h2>
      <div className="max-w-2xl mx-auto p-6 bg-white/80 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-lg">
     
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Item Name *
          </label>
          <input
            id="name"
            name="name"
            placeholder="e.g., Organic Tomatoes"
            value={form.name}
            onChange={handleChange}
            className={` text-gray-300 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Category Field */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
            Category *
          </label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="text-gray-300 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price and Quantity Row */}
        <div className="grid grid-cols-2 gap-4">
          {/* Price Field */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-1">
              Price (per kg) *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900">
                $
              </span>
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={form.price}
                onChange={handleChange}
                className={` text-gray-300 w-full pl-8 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.price ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            {errors.price && (
              <p className="mt-1 text-sm text-red-600">{errors.price}</p>
            )}
          </div>

          {/* Quantity Field */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
              Quantity *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-900">
                kg
              </span>
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.1"
                min="0"
                placeholder="0.0"
                value={form.amount}
                onChange={handleChange}
                className={`text-gray-300 w-full pr-10 pl-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.amount ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
            )}
          </div>
        </div>

        {/* Expiry Date Field */}
        <div>
          <label htmlFor="expiry" className="block text-sm font-medium text-gray-300 mb-1">
            Expiry Date *
          </label>


          
          <input
            id="expiry"
            name="expiry"
            type="date"
            value={form.expiry}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={`text-gray-300 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.expiry ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.expiry && (
            <p className="mt-1 text-sm text-red-600">{errors.expiry}</p>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </span>
            ) : (
              "Save Item"
            )}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default AddItem;