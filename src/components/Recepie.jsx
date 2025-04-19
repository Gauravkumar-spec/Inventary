import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Search } from 'lucide-react';
import { MdDelete } from "react-icons/md";  





function Recepie(){

    const [form, setForms] = useState({
    name: "",
    expiry: "",
    price: "",
    amount: "",
    ingredient:[],
    
  });


  const handleChange = (e) => {
    setForms({ ...form, [e.target.name]: e.target.value });
  };

  // const changing =(e) =>{
  //   setForms({ingredient = matchedItem.name})
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString(); //Gets format
   
    const newItem = {
      ...form,
      createdAt: formattedTime, //Date & Time
    };
  

  // Save to localStorage
const existingItems = JSON.parse(localStorage.getItem("customerItems"))||[];
const updatedItems = [...existingItems, newItem];
localStorage.setItem("customerItems", JSON.stringify(updatedItems));

// update local state 
setObjects(updatedItems);

  }



  const [search, setSearch] = useState("");
  const [matchedItem,setMatchItem] = useState("null");

  const [objects, setObjects] = useState(() => {
    return JSON.parse(localStorage.getItem("customerItems")) || [];
  });

  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem("customItems"))


    //search for item whenever 'search' changes
    if(search.trim() !==""){

      const result = items.find(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

    setMatchItem(result || null);  //if found, it sets it to that else null...

  }else{
    setMatchItem(null);
  }

  },[search]);

// console.log(form.ingredient);

function addIngredient(){
  if(matchedItem){
    setForms((prevForm) => ({
      ...prevForm,
      ingredient: [...prevForm.ingredient, matchedItem.name],
    }));
 
    
   
    alert(`${matchedItem.name} added`)
  }
};

const handleDelete = (indexToDelete) => {
  const updatedItems = objects.filter((_, index) => index !== indexToDelete);
  setObjects(updatedItems);
  localStorage.setItem("customerItems", JSON.stringify(updatedItems));
};


    return (

      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-amber-900/20">

       {/* <form onSubmit={handleSubmit} className="space-y-6">

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
               <label className="md:col-span-1 pt-2 text-sm font-medium text-gray-700">
            Name *
          </label>
          
          <div className="md:col-span-2">
           <input
                name="name"
                placeholder="name"
                value={form.name}
                onChange={handleChange}
                
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
              </div>
              
              <span className="bg-gray-200 shadow rounded-r-sm">  <Search className="size-[25px] p-0.5"/></span>
              </div>
             <div className="flex">
              Expiry:<input
                name="expiry"
                type="date"
                placeholder="text"
                value={form.expiry}
                onChange={handleChange}
                className=  {`border px-1 rounded-l-sm ml-2.5 w-[192px] border-gray-300 bg-gray-100 ${
          !form.expiry ? "text-gray-600" : "text-black" 
        }`}
                required  />
                <span className="bg-gray-200 shadow rounded-r-sm">  <Search className="size-[25px] p-0.5 "/></span>
                </div>
             
              <div className="flex">
               Price: <input
                name="price"
                 placeholder="price per kg"
                 type="number"
                 value={form.price}
                 onChange={handleChange}
                 className="border px-1 ml-5 shadow border-gray-300 bg-gray-100 rounded-l-sm "
                 required
               />
               <span className="bg-gray-200 shadow rounded-r-sm">  <Search className="size-[25px] p-0.5"/></span>
               </div>
      
              <div className="flex">
               Qty:  <input
               type="number"
                name="amount"
                placeholder="amount in kg"
                value={form.amount}
                onChange={handleChange}
                className="border px-1 ml-7 shadow border-gray-300 bg-gray-100 rounded-l-sm "
                required
              />
              <span className="bg-gray-200 shadow rounded-r-sm">  <Search className="size-[25px] p-0.5"/></span>
              </div>

   
        <div className="whitespace-nowrap mb-0.5"> Choose Ingredients:</div>
        <div>
        <div className="p-2 w-[230px] mx-12 flex">
        <input 
        name="ingredient"
        type="text" 
        placeholder="search for.."
        value={search}
        onChange={(e) => setSearch(e.target.value) }
        className="w-full px-4 py-1 bg-gray-100"
        
        />
        <span className="bg-gray-200 shadow rounded-r-sm">  <Search className="size-[25px] p-0.5"/></span>
        </div>
       
        
      {search ? (
        matchedItem ? (

          <div className="card rounded shadow bg-gray-200 ">
            <h2>{matchedItem.name}</h2>
            <p>Price: {matchedItem.price}</p>
            <p>Expiry: {matchedItem.expiry}</p>
            <p>Qty: {matchedItem.amount}</p>
            <p>Added on : {matchedItem.createdAt}</p>
           <div className="bg-red-400 ml-80 rounded p-1 mb-1" 
             onClick={addIngredient}
              >
              ADD</div>

          </div>
        ) : (
          <p>No items found</p>
        ) 
      ) : null }
   


      </div>
      
              <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded ml-3">
                Submit
              </button>
            </form>  */}
            <h2 className="text-2xl font-semibold text-gray-300 mb-3 text-center pt-10 ">
        Make Recepie
      </h2>
            <div className="pt-10 pb-18 ">
              
            <div className="max-w-3xl mx-auto  p-4  bg-white/90 dark:bg-gray-800/95 rounded-xl shadow-lg">
  <div className="">
  <form onSubmit={handleSubmit} className ="space-y-6 mt-10">
       {/* Name Field */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mr-38 ">
         <label className="md:col-span-1 pt-2 text-sm font-medium text-gray-100 lg:ml-16">
           Product Name *
         </label>
         <div className="md:col-span-2">
           <input
             type="text"
             name="name"
             value={form.name}
             onChange={handleChange}
             className="w-full px-4 py-2  rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-200"
             placeholder="Enter product name"
             required
           />
         </div>
       </div>

       {/* Price & Quantity Row */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mr-38">
         <label className="md:col-span-1 pt-6 text-sm font-medium text-white lg:ml-16">
           Price & Quantity
         </label>
         <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
             <label className="block text-xs text-gray-400 mb-1">Price (USD)</label>
             <div className="relative">
               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
               <input
                 type="number"
                 step="0.01"
                 name="price"
                 value={form.price}
                 onChange={handleChange}
                 className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200"
                 placeholder="0.00"
               />
             </div>
           </div>
           <div>
             <label className="block text-xs text-gray-400 mb-1">Quantity</label>
             <input
               type="number"
               name="amount"
               value={form.amount}
               onChange={handleChange}
               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200"
               placeholder="0"
             />
           </div>
         </div>
       </div>

       {/* Expiry Date */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mr-38">
         <label className="md:col-span-1 pt-2 text-sm font-medium text-gray-300 lg:ml-16">
           Expiry Date *
         </label>
         <div className="md:col-span-2">
           <input
             type="date"
             name="expiry"
             value={form.expiry}
             onChange={handleChange}
             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200"
             required
           />
           <p className="mt-1 text-xs text-gray-400">Select the expiration date</p>
         </div>
       </div>

       {/* Ingredients */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mr-38">
         <label className="md:col-span-1 pt-2 text-sm font-medium text-gray-300 lg:ml-16">
           Ingredients *
         </label>
         <div className="md:col-span-2">
         <div className="flex ">
         <input 
       name="ingredient"
       type="text" 
       placeholder="search for.."
       value={search}
       onChange={(e) => setSearch(e.target.value) }
       className=" bg-gray-800/10 w-full px-4 py-2 rounded-l-lg border border-gray-300 border-r-0 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200"
       
       />
       
           <span className="bg-gray-800/10 shadow rounded-r-sm">  <Search className="size-11 rounded-lg border border-gray-300 p-1.5"/></span>
    
       </div>
       <p className="mt-1 text-xs text-gray-400">Select items like water,chilli, banana,cashew, milk...</p>
       </div>
      
       
      {search ? (
        matchedItem ? (

          <div className="card rounded-md shadow  p-3 m-6 mr-4 h-43 w-40 bg-gray-300">
           <div className="flex justify-between">
            <h2 className="font-bold text-xl">{matchedItem.name}</h2>
            <p className="font-bold text-lg pr-2">$: {matchedItem.price}</p>
            </div>
            <p className="mt-2 text-sm">Expiry: {matchedItem.expiry}</p>
            <p className=" text-sm">Qty: {matchedItem.amount}</p>
            <p className=" text-sm">Added on : {matchedItem.createdAt}</p>
           <div className="bg-red-400 ml-24 rounded pl-2 mb-1 text-xs " 
             onClick={addIngredient}
              >
              ADD</div>

          </div>
        ) : (
          <p>No items found</p>
        ) 
      ) : null }
   


      </div>
      
              <button type="submit" className="bg-blue-600 text-white px-6 ml-150 py-2 mb-4 rounded">
                Submit
              </button>
     </form>
     </div>
     </div>
            </div>
 

            { <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-5 p-3
      ">
       
        {objects.map((item, index) => (
          <div key={index} className="w-44 h-72 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-name={item.name}>





<button
      onClick={() => handleDelete(index)}
      className=" text-white px-35 pb-3 mt-2 rounded pr-0"
    >
      <MdDelete className="text-red-400 hover:text-red-700 size-5" />
    </button>
    <div className="flex justify-between items-start">

      </div>

      <div className="px-4 py-0.5 bg-gray-50 border-b flex justify-between">
        <h3 className="font-bold text-gray-800 truncate">{item.name}</h3>
        <span className="font-bold text-blue-600">${item.price}</span>
      </div>
            <div className="p-4">
            <div className="grid grid-cols-2 gap-2  text-sm">
          <div className="space-y-1">
            <p className="text-gray-500">Expiry</p>
            <p className="font-medium">{item.expiry}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Amount</p>
            <p className="font-medium">{item.amount}</p>
          </div>
          <div className="col-span-2 space-y-1">
            <p className="text-gray-500">Created</p>
            <p className="font-medium text-sm">{item.createdAt}</p>
          </div>
          </div>
        </div>
            <p className="pl-4 pb-2 font-medium"><span className="text-gray-500 text-sm">Ingredients :</span> 
              {Array.isArray(item.ingredient) && item.ingredient.length > 0
              ? item.ingredient.join(", ") : "None"}</p>


</div>





          
        ))}
      </div> }






          </div>



    )

}

export default Recepie;
