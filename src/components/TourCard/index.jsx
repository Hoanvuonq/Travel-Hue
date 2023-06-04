import * as React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';
import { AppUtils } from '../../utils/AppUtils';

import style from './style.module.scss';

const TourCard = (props) => {
  const { thumbnail, title, price } = props;

  return (
    <div className={style.container}>
      <div className={style.inner}>
        <Image width="275px" height="auto" source={thumbnail} />
        <div className={style.content}>
          <h4 className={style.title}>{title}</h4>
          <span className={style.reviewStar}>★ 4.7</span>
          <p>
            Từ{' '}
            <b>
              <span className={style.currency}>đ</span> <span>{AppUtils.formatMoney(price)}</span>
            </b>
          </p>
          <p className={style.policy}>Chính sách đảm bảo về giá</p>
        </div>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TourCard;
