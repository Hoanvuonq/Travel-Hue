import * as React from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import ContainSection from '../../../ContainSection';
import Carousel from '../../../Carousel';
import Image from '../../../Image';

import style from './style.module.scss';

const dataDestination = [
  {
    thumbnail: 'https://res.klook.com/image/upload/Mobile/City/kpoyhrq0tgtkpzucv67d.webp',
    title: 'Đà nẵng',
    distance: '79km',
  },
  {
    thumbnail: 'https://res.klook.com/image/upload/Mobile/City/rxhtyutcb46tcd50cmqf.webp',
    title: 'Hội An',
    distance: '103km',
  },
  {
    thumbnail: 'https://res.klook.com/image/upload/Mobile/City/ljrcwyg7ywwgqjcmmoze.webp',
    title: 'Đồng Hới - Quảng Bình',
    distance: '153km',
  },
  {
    thumbnail: 'https://res.klook.com/image/upload/Mobile/City/i00q6nyjenl4iqt3yzqo.webp',
    title: 'Quy Nhơn',
    distance: '346km',
  },
  {
    thumbnail: 'https://res.klook.com/image/upload/Mobile/City/kabzblpcyaqdowndaaye.webp',
    title: 'Nha Trang',
    distance: '501km',
  },
];

const DestinationSection = (props) => {
  const {} = props;

  return (
    <ContainSection title="Điểm đến tại Huế">
      <Carousel
        source={dataDestination}
        spaceBetween={20}
        slidesPerView={5}
        className={style.containerCarousel}
        controls
        hideNavigateOnBegin
        hideNavigateOnEnd
        hoverShowNavigate
        loop
        onRenderItem={(item) => (
          <div className={style.wrapItem}>
            <Image source={item.thumbnail} paddingTop="100%" height={288} />
            <div className={style.bgItem}>
              <div className={style.info}>
                <p className={style.title}>{item.title}</p>
                <span>{item.distance}</span>
              </div>
            </div>
          </div>
        )}
      />
    </ContainSection>
  );
};

export default DestinationSection;
