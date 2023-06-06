import React, {useState} from 'react'
import './Navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { routes } from '../../../utils/routes'
import classNames from 'classnames'

const Navbar = () => {
  const [active, setActive] = useState("navBar")


  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar =()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className={classNames("header flex")}>

        <div className="logoDiv">
           <Link to={routes.HOME} className="logo flex">
            <h1><MdOutlineTravelExplore className="icon"/>Travelby.</h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to={routes.HOME} className="navLink">Home</Link>
            </li>
            {/* <li className="navItem">
               <Link to={'#'} className="navLink">Travel Guides</Link>
            </li> */}
            {/* <li className="navItem">
               <Link to={'#'} className="navLink">Hotels</Link>
            </li> */}
            <li className="navItem">
               <Link to={routes.FORM} className="navLink">Form</Link>
            </li>
            <button className="btn">
               <Link to={'/Plan'}>START PLANNING</Link>
            </button>

          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  )
}

export default Navbar
