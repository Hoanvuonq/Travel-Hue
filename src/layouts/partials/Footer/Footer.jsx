import React, {useEffect} from 'react'
import './Footer.css'
import video2 from '../../../Assets/video2.mp4'
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
            <small>GIỮ LIÊN LẠC</small>
            <h2>Đi du lịch với chúng tôi</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Nhập địa chỉ email'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              GỬI<FiSend className='icon'/>
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/> Du lịch.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Chúng tôi sẽ tổ chức chuyến đi tuyệt vời để bạn khám phá những điểm đến nổi tiếng như Cố đô Huế, Đại Nội, Thiên Mụ Pagoda và Núi Ngự Bình. Bạn sẽ được chiêm ngưỡng cung điện hoàng gia, tham quan các di tích lịch sử và thưởng thức ẩm thực truyền thống độc đáo của miền Trung. Với dịch vụ chuyên nghiệp và đội ngũ hướng dẫn viên giàu kinh nghiệm, chúng tôi cam kết mang đến cho bạn một chuyến đi tuyệt vời và đáng nhớ tại Huế.
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
                  VỀ CHÚNG TÔI
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Dịch vụ
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bài viết
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Lập kế hoạch
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Đề xuất
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Phiếu quà tặng
              </li>
            </div>

          
{/* -------------group 2 footer------ */}
          
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                  ĐỐI TÁC
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Đặt trước
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Thuê xe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Khách sạn
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Ẩm thực
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Marketing
              </li>
            </div>

{/* -------------group 3 footer------ */}

            <div data-aos="fade-up" data-aos-duration="5000"className="linkGroup">
              <span className="groupTitle">
              ĐIỀU KHOẢN SỬ DỤNG
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Điều khoản
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Bảo mật
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Cookie
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Phần mềm
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                  Luật lệ
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>CHỦ ĐỀ TRANG WEB DU LỊCH TỐT NHẤT</small>
            <small>COPYRIGHT</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer