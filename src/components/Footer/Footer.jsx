import React, {useEffect} from 'react'
import './Footer.css'
import video2 from '../../Assets/video2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND<FiSend className='icon'/>
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dicta amet ipsum distinctio enim, aperiam dolore! Consequatur aperiam quas recusandae earum itaque dolorum, doloremque totam, sit nulla, impedit perferendis molestiae?
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>
{/* -------------group 1 footer------ */}
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000"className="linkGroup">
              <span className="groupTitle">
                ABOUT US  
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Blogs
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Planning
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Gift Certificate
              </li>
            </div>

          
{/* -------------group 2 footer------ */}
          
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>

{/* -------------group 3 footer------ */}

            <div data-aos="fade-up" data-aos-duration="5000"className="linkGroup">
              <span className="groupTitle">
                TERMS OF USE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Terms of use
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Privacy Policy
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Cookie Policy
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Software 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rule
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer