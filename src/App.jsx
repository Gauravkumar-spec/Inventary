import {Routes, Route, Link, NavLink} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Recepie from './components/Recepie'
import Contact from './components/Inventory'
import Tomat from './items/tomat'
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
    <div className='flex bg-gray-100 sticky top-0 z-50 shadow items-center'>
      <div className=' pl-8 '><img src="https://img.icons8.com/?size=160&id=124187&format=png" alt=""  className='w-3/4 '/></div>
      <nav className='flex  flex-wrap gap-1 sm:gap-4 md:gap-6  md:pl-65 w-5/10 xs:pl-20 sm:pl-20 lg:pl-115
        '>
          <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'relative inline-block text-gray-900 font-semibold transition duration-300 ease-in-out border-b-2 border-transparent hover:border-gray-500 ' : 'text-gray-500'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? 'relative inline-block text-gray-900 font-semibold transition duration-300 ease-in-out border-b-2 border-transparent hover:border-gray-500 ' : 'text-gray-500'
        }
      >
        Add Inventory
      </NavLink>  
      <NavLink
        to="/recepie"
        className={({ isActive }) =>
          isActive ? 'relative inline-block text-gray-900 font-semibold transition duration-300 ease-in-out border-b-2 border-transparent hover:border-gray-500 ' : 'text-gray-500'
        }
      >
        Recepie
      </NavLink>
    </nav>
      <div className='md:ml-30 lg:ml-98'>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? ' inline-block text-gray-900 font-semibold transition duration-300 ease-in-out border-b-2 border-transparent hover:font-bold ' : 'text-purple-800 hover:font-semibold'
        }
      >
        About
      </NavLink>  
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




