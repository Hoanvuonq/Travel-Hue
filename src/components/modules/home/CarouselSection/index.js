import * as React from 'react';
import Typed from 'react-typed';
import { BiSearch } from 'react-icons/bi';

import Input from '../../../Input';

import Carousel from '../../../Carousel';

import Bg1 from '../../../../Assets/bg1.jpg';
import Bg2 from '../../../../Assets/bg2.jpg';
import Bg3 from '../../../../Assets/bg3.jpg';
import Bg4 from '../../../../Assets/bg4.jpg';
import Bg5 from '../../../../Assets/bg5.jpg';

import style from './styles.module.scss';

const images = [
  // {
  //   src: Bg1,
  //   caption: 'Huế - Đẹp và Lịch sử',
  // },
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

const CarouselSection = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapCarousel}>
        <Carousel
          autoplay
          loop
          effect="fade"
          className={style.carousel}
          source={images}
          onRenderItem={(item, index) => (
            <div className={style.slideItem}>
              <div
                className={style.slideImg}
                style={{
                  background: `url(${item.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  paddingTop: '50%',
                }}
              ></div>
            </div>
          )}
        />
        <div data-aos="fade-up" className={style.information}>
          <div>
            <h1>Huế</h1>
            <p>
              <Typed strings={images.map((i) => i.caption)} typeSpeed={40} backSpeed={50} loop />
            </p>
          </div>
          <div className={style.wrapSearch}>
            <div className={style.wrapInput}>
              <Input placeholder="Search" />
              <div className={style.iconSearch}>
                <BiSearch />
              </div>
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
