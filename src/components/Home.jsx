import React, { useState, useRef, useEffect } from "react";
import { Link ,NavLink} from "react-router-dom";
import { Routes } from "react-router-dom";
import { Search } from "lucide-react";
import { MdDelete } from "react-icons/md";  


function Home() {
  useEffect(() => {
    // Get items from localStorage when Home loads
    const storedItems = JSON.parse(localStorage.getItem("customItems")) || [];
    setItems(storedItems);
  }, []);

  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".card");

    cards.forEach((card) => {
      const name = card.getAttribute("data-name");

      if (name.toLowerCase().includes(search.toLowerCase())) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }, [search]);


  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
    localStorage.setItem("customItems", JSON.stringify(updatedItems));
  };




  return (
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-00">
      <div className="p-6 pt-12 max-w-md mx-auto flex">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow px-5 h-10 py-3 mb-8 text-gray-700 bg-white border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        />
        <span className=" bg-blue-500 h-10 w-12 hover:bg-blue-600 text-white px-3 py-2 rounded-r-xl transition-all duration-300 shadow-md hover:shadow-lg">
          {" "}
          <Search />
        </span>
      </div>
      <h3 className=" pl-4 text-lg font-medium text-gray-300 tracking-wide drop-shadow-sm mb-4 underline underline-offset-4 decoration-gray-200">
        FEW SAMPLES
      </h3>

      <div ref={containerRef}>
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-5 p-3`">
          <div
            className="card bg-gray-50 rounded-md shadow-md p-2 flex flex-col items-center aspect-square hover:shadow-2xl"
            data-name="potato"
          >
            <Link to="/potato">
            <img
              src="https://up.yimg.com/ib/th?id=OIP.NpF4-3oEpS3dG828WiWERQHaE8&pid=Api&rs=1&c=1&qlt=95&w=162&h=108"
              className="w-40 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
 <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">potato</h2>
              <p className="text-sm text-green-600 font-semibold">$1.49</p>
              </div>
            <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>

          <div
            className="card bg-gray-50 rounded-md shadow p-2 flex flex-col items-center aspect-square hover:shadow-lg border-blue-200"
            data-name="tomato"
          >
            <Link to="/tomat">
              <img
                src="	https://up.yimg.com/ib/th?id=OIP.JMRIOYp2jmlICSlEma_3gQHaE7&pid=Api&rs=1&c=1&qlt=95&w=174&h=116"
                className="w-40 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
 <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">tomato</h2>
              <p className="text-sm text-green-600 font-semibold">$2.99</p>
              </div>
              <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>

          <div
            className="card bg-gray-50 rounded-md shadow p-2 flex flex-col items-center aspect-square hover:shadow-lg"
            data-name="cabbage"
          >
            <Link to="/cabbage">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.wsBmcwCmlk8iETucnolh5QHaE6&pid=Api&P=0&h=180"
                className="w-40 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
 <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">cabbage</h2>
              <p className="text-sm text-green-600 font-semibold">$1.29</p>
              </div>
              <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>

          <div
            className="card bg-gray-50 rounded-md shadow p-2 flex flex-col items-center aspect-square hover:shadow-lg"
            data-name="cauliflower"
          >
            <Link to="/cauliflower">
              <img
                src="https://up.yimg.com/ib/th?id=OIP.Tj07Fox3wDePEBvACfNKIgHaFC&pid=Api&rs=1&c=1&qlt=95&w=180&h=122"
                className="w-40 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
 <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">cauliflower</h2>
              <p className="text-sm text-green-600 font-semibold">$2.99</p>
              </div>
              <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>
          <div
            className="card bg-gray-50 rounded-md shadow p-2 flex flex-col items-center aspect-square hover:shadow-lg"
            data-name="Garlic"
          >
            <Link to="garlic">
              <img
                src="https://sp.yimg.com/ib/th?id=OIP.tIo3aorhOxEYw9bXzMkMWgHaFj&pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
                className="w-40 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
 <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">Garlic</h2>
              <p className="text-sm text-green-600 font-semibold">$3.99</p>
              </div>
              <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>
          <div
            className="card bg-gray-50 rounded-md shadow p-2 flex flex-col items-center aspect-square hover:shadow-lg"
            data-name="Cardamom"
          >
            <Link to="cardamom">
              <img
                src="https://www.thespruceeats.com/thmb/AETzaIbzRK72-saQHvggFw_Cf5Y=/2500x1661/filters:fill(auto,1)/cardamom-2500-56a2101a5f9b58b7d0c62aae.jpg"
                className="w-40 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
 <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">cardamom</h2>
              <p className="text-sm text-green-600 font-semibold">$24.99</p>
              </div>
              <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>
          <div
            className="card bg-gray-50 rounded-md shadow p-2 flex flex-col items-center aspect-square hover:shadow-lg"
            data-name="Capsicum"
          >
            <Link to="capsicum">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.t8BSiT7-WnNBhG3ylAj7cQHaFl&pid=Api&P=0&h=180"
                className="w-30 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
 <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">capsicum</h2>
              <p className="text-sm text-green-600 font-semibold">$3.49</p>
              </div>
              <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>
          <div
            className="card bg-gray-50 rounded-md shadow p-2 flex flex-col items-center aspect-square hover:shadow-lg"
            data-name="almonds"
          >
            <Link to="almonds">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.jNZP7x-07A9LMjLrpyPDoQHaE8&pid=Api&P=0&h=180"
                className="w-40 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
             <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">almond</h2>
              <p className="text-sm text-green-600 font-semibold">$8.99</p>
              </div>
              <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>
          <div
            className="card bg-gray-50 rounded-md shadow p-2 flex flex-col items-center aspect-square hover:shadow-lg"
            data-name="cashew"
          >
            <Link to="cashew">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.-hKxx7jsMGiniargT41eaQHaEK&pid=Api&P=0&h=180"
                className="w-40 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
              <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">cashew</h2>
              <p className="text-sm text-green-600 font-semibold">$8.69</p>
              </div>
              <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>
          <div
            className="card bg-gray-50 rounded-md shadow p-2 flex flex-col items-center aspect-square hover:shadow-lg"
            data-name="walnut"
          >
            <Link to="walnut">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.BuPDjMACRSXPopdwYxYOBAHaEl&pid=Api&P=0&h=180"
                className="w-38 h-20 object-cover rounded mb-4 lg:w-full lg:h-1/2"
              />
              <div className="flex justify-between px-2 py-2">
              <h2 className="text-md font-medium">walnut</h2>
              <p className="text-sm text-green-600 font-semibold">$9.99</p>
              </div>
              <button className="text-sm  bg-blue-500 text-white px-2 sm:py-1 md:py-1.5 lg:py-2 rounded hover:bg-blue-600 lg:w-full lg:mt-3 sm:w-full ">
                View Status
              </button>
            </Link>
          </div>
          <div
            className="card rounded-md shadow p-3 flex flex-col items-center aspect-square hover:shadow-lg bg-gray-300"
            data-name="pistachin "
          >
            <Link to="pistachin">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.9zwgKjsG5CXKbN6x4ZgvngHaE8&pid=Api&P=0&h=180"
                className="w-30 h-20 object-cover rounded mb-4 bg shadow-lg lg:w-full lg:h-1/2"
              />
 <div className="flex justify-between  py-2">
              <h2 className="text-md font-medium">pistachios</h2>
              <p className="text-sm text-green-600 font-semibold">$12.99</p>
              </div>
              <span className="text-xs  underline  text-red-500  px-1 py-1 rounded hover:text-red-600 hover:font-semibold">
                Out Of Stock
              </span>
            </Link>
          </div>
          <div
            className="card rounded-md shadow p-3 flex flex-col items-center aspect-square hover:shadow-lg bg-gray-300"
            data-name="pumpkin-seeds"
          >
            <Link to="pumpkinseeds">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.gNlNmsShRoNpLaOF2GGpwwHaE8&pid=Api&P=0&h=180"
                className="w-30 h-20 object-cover rounded mb-4 bg shadow-lg lg:w-full lg:h-1/2"
              />
 <div className="flex justify-between py-2">
 <h2 className="text-md font-medium">pistachios</h2>
              <p className="text-sm text-green-600 font-semibold">$12.99</p>
              </div>
              <span className="text-xs  underline  text-red-500  px-1 py-1 rounded hover:text-red-600 hover:font-semibold">
                Out Of Stock
              </span>
            </Link>
          </div>
        </div> 

        <br />
        <h3 className="pt-16 pl-6 text-lg font-medium text-gray-300 tracking-wide drop-shadow-sm mb-2 underline underline-offset-4 decoration-gray-200">
          ALL ITEMS
        </h3>

        <div className="">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-5 p-3
      "
          >
            {items.map((item, index) => (
              <div
                key={index}
                className=" card w-40 h-60 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow0 "
                data-name={item.name}
              >
                <button
                      onClick={() => handleDelete(index)}
                      className=" text-white px-32 pb-3 mt-2 rounded pr-0"
                    >
                      <MdDelete className="text-red-400 hover:text-red-700 size-5" />
                    </button>

                <div className="px-4 py-1.5 bg-gray-100 border-b flex justify-between">
                <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
               
                <span className="font-bold text-blue-600">${item.price}</span></div>
                <div className="p-4">
                <div className="grid grid-cols-2 gap-2  text-sm">
                <div className="space-y-1">
            <p className="text-gray-500">Expiry</p>
            <p className="font-medium">{item.expiry}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Amount</p>
            <p className="font-medium">{item.amount} kg</p>
          </div>
          <div className="col-span-2 space-y-1">
            <p className="text-gray-500">Created</p>
            <p className="font-medium text-sm">{item.createdAt}</p>
          </div>
          </div>
          </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
