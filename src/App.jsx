import {Routes, Route, Link, NavLink} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Recepie from './components/Recepie'
import Contact from './components/Inventory'
import Tomat from './items/Tomat'
import Almonds from './items/Almonds'
import Cabbage from './items/Cabbage'
import Capsicum from './items/Capsicum'
import Cardamom from './items/Cardamom'
import Cauliflower from './items/Cauliflower'
import Garlic from './items/Garlic'
import Ginger from './items/Ginger'
import Hazlenuts from './items/hazlenuts'
import Potato from './items/Potato'
import Pumpkinseeds from './items/pumpkinseeds'
import Walnut from './items/Walnut'
import Watermelon from './items/watermelon'
import Pistachin from './items/pistachin'
import Cashew from './items/Cashew'
import AboutPage from './items/AboutPage'



function App() {

  return (
    <>
  <div className="sticky top-0 z-50 bg-white shadow-md">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

    {/* Logo */}
    <div className="flex items-center">
      <img
        src="https://img.icons8.com/?size=160&id=124187&format=png"
        alt="Logo"
        className="w-12 h-12 object-contain"
      />
    </div>

    {/* Navigation Links */}
    <nav className="hidden md:flex items-center gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm font-medium transition-all duration-200 ${
            isActive
              ? "text-gray-900 border-b-2 border-gray-700 pb-1"
              : "text-gray-500 hover:text-gray-800"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-sm font-medium transition-all duration-200 ${
            isActive
              ? "text-gray-900 border-b-2 border-gray-700 pb-1"
              : "text-gray-500 hover:text-gray-800"
          }`
        }
      >
        Add Inventory
      </NavLink>

      <NavLink
        to="/recepie"
        className={({ isActive }) =>
          `text-sm font-medium transition-all duration-200 ${
            isActive
              ? "text-gray-900 border-b-2 border-gray-700 pb-1"
              : "text-gray-500 hover:text-gray-800"
          }`
        }
      >
        Recipe
      </NavLink>
    </nav>

    {/* About Link (Right side) */}
    <div className="hidden md:block">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-sm font-semibold transition-all duration-200 ${
            isActive
              ? "text-gray-900 border-b-2 border-gray-700 pb-1"
              : "text-purple-700 hover:text-purple-900"
          }`
        }
      >
        How It Works
      </NavLink>
    </div>

  </div>
</div>


      {/* relative inline-block text-gray-900 font-semibold transition duration-300 ease-in-out border-b-2 border-transparent hover:border-gray-500 */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= "/recepie" element = {<Recepie/>}/>
        <Route path= "/contact" element = {<Contact/>}/>
        <Route path= "/tomat" element = {<Tomat/>}/>
        <Route path= "/almonds" element = {<Almonds/>}/>
        <Route path= "/cabbage" element = {<Cabbage/>}/>
        <Route path= "/capsicum" element = {<Capsicum/>}/>
        <Route path= "/cardamom" element = {<Cardamom/>}/>
        <Route path= "/cauliflower" element = {<Cauliflower/>}/>
        <Route path= "/garlic" element = {<Garlic/>}/>
        <Route path= "/ginger" element = {<Ginger/>}/>
        <Route path= "/hazlenuts" element = {<Hazlenuts/>}/>
        <Route path= "/pumpkinseeds" element = {<Pumpkinseeds/>}/>
        <Route path= "/walnut" element = {<Walnut/>}/>
        <Route path= "/watermelon" element = {<Watermelon/>}/>
        <Route path= "/cashew" element = {<Cashew/>}/>
        <Route path= "/pistachin" element = {<Pistachin/>}/>
        <Route path= "/potato" element = {<Potato/>}/>
        <Route path= "/about" element = {<AboutPage/>}/>
      

      </Routes>
    </>
  )
}

export default App




