import React, {useState} from 'react'
import './Navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { routes } from '../../../utils/routes'
import classNames from 'classnames'
import logo from '../../../Assets/logo.PNG'

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
            <h1><img src={logo}  alt="logo"className="icon"/></h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to={routes.HOME} className="navLink">Trang chủ</Link>
            </li>
            <li className="navItem">
               <Link to={routes.FORM} className="navLink">Đề xuất</Link>
            </li>
            <button className="btn">
               <Link to={'/Plan'}>LẬP KẾ HOẠCH</Link>
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
