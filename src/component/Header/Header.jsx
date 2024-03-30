import React from 'react'
import './header.css'
import './Media/media.css'


function Header() {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Choose from a diverse menu fearturing a delectable array of dishes crafed with the finest ingredients and culinary experties.Our mission is to satify your cravings and elevate your dining experience one delicious meal at a time. </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header