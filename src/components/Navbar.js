import React from 'react'
import './Navbar.css' 

const Navbar = () => {
  return (
    
    <div>
        <div class="nav-wrapper">
          <li><a href="/home">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/">Login</a></li>
        </div>
    </div>
  )
}

export default Navbar