import * as React from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrCatalog } from 'react-icons/gr';

import Image from '../Image';
import { AppUtils } from '../../utils/AppUtils';

import style from './style.module.scss';

const TourCard = (props) => {
  const { thumbnail, title, price, onClick, location, catalog } = props;

  return (
    <div className={style.container} onClick={onClick}>
      <div className={style.inner}>
        <Image width="275px" height="auto" source={thumbnail} />
        <div className={style.content}>
          <h4 className={style.title}>{title}</h4>
          <h5 className={style.catalog}>{catalog}</h5>
          <span className={style.reviewStar}>★ 4.7</span>
          <p className={style.location}>
            <FaMapMarkerAlt className={style.iconMap} />
            {location.trim() || 'Thành phố Huế'}
          </p>
        </div>
      </div>
      {price && (
        <p className={style.price}>
          Từ{' '}
          <b>
            <span className={style.currency}>đ</span> <span>{AppUtils.formatMoney(price)}</span>
          </b>
        </p>
      )}
      <p className={style.policy}>Chính sách đảm bảo về giá</p>
    </div>
  );
};

TourCard.propTypes = {
  thumbnail: PropTypes.string,
  location: PropTypes.string,
  catalog: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
};

export default TourCard;
