import React, { useState, useEffect } from 'react';
import './HeaderHome.css'


import Bg1 from '../../../../Assets/bg1.jpg'
import Bg2 from '../../../../Assets/bg2.jpg'
import Bg3 from '../../../../Assets/bg3.jpg'
import Bg4 from '../../../../Assets/bg4.jpg'
import Bg5 from '../../../../Assets/bg5.jpg'
import Navbar from '../../../../layouts/partials/Navbar/Navbar';


const images = [
  {
    src: Bg1,
    caption: 'Huế - Đẹp và Lịch sử',
  },
  {
    src: Bg2,
    caption: 'Những cung đường thơ mộng',
  },
  {
    src: Bg3,
    caption: 'Mùa xuân Huế - Sắc hoa nở rực rỡ',
  },
  {
    src: Bg4,
    caption: 'Thành phố cổ Huế - Di sản văn hóa',
  },
  {
    src: Bg5,
    caption: 'Huế khi hoàng hôn buông xuống   ',
  },
];



const HeaderHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <>
      <Navbar />
      <section className='header-home'>
        <div className="overlay"></div>
        <img className="bg-slide" src={images[currentSlide].src} alt="" />
        <div className="caption">{images[currentSlide].caption}</div>
        <div className="controls">
          <button onClick={prevSlide} className="prev-btn">&#8249;</button>
          <button onClick={nextSlide} className="next-btn">&#8250;</button>
        </div>
      </section>
    </>
  )
}

export default HeaderHome