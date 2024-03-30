import React, { useState } from 'react'
import Menu from './component/Menu/Menu'
import { Route, Routes } from 'react-router-dom'
import Home from './component/pages/Home/Home'
import Cart from './component/pages/Cart/Cart'
import Placeholder from './component/pages/Placeholder/Placeholder'
import Footer from './component/Footer/Footer'
import Login from './component/Login/Login'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <> </>}
      <div className='app'>
        <Menu setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeholder' element={<Placeholder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App