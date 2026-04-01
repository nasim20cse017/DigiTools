import { FaUser } from 'react-icons/fa'
import './App.css'
import {  ToastContainer } from 'react-toastify'
import Navbar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import StatsSection from './components/Stats/Stats'
import { useState } from 'react'
import ShopSection from './components/Shop/ShopSection'
import GetStarted from './components/GetStarted/GetStarted'
import Pricing from './components/PricingSection/Pricing'

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  return (
    <>
    <Navbar cartCount={cart.length} onCartClick={() => setActiveTab('cart')}></Navbar>
    <Banner></Banner>
    <StatsSection></StatsSection>
      <ShopSection cart={cart} 
        setCart={setCart} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}></ShopSection>
        <GetStarted></GetStarted> 
        <Pricing></Pricing> 





      <ToastContainer />


    </>
  )
}

export default App
