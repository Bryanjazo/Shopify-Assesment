import React, {useState} from 'react';

import {Link} from 'react-router-dom'
import {Button} from '../../Components/Button.js'
import {useSelector, useDispatch} from 'react-redux'

import './Navbar.css'
function NavBar(){


  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()
  const handleClick = (e) =>{
    e.preventDefault()
    setClicked(!clicked)
  }



 

  return(
  <nav className="NavbarItems">
    <Link className="cla" to="/">
    <h1   className="NavbarLogo changeTitle">NasaGram<i class="fab fa-fantasy-flight-games"></i></h1>
    </Link>
      <div className="MenuItmem" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>

        <li >
        <Link className="nav-links" to="/Home">
            Home
        </Link>
          <Link className="nav-links" to="/Search">
            Search By Date
        </Link>
      
        </li>
    </ul>
   
  </nav>
  )
}

export default NavBar;