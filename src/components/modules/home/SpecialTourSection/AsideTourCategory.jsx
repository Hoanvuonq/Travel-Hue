import * as React from 'react';

import style from './style.module.scss';

import { categoryTour } from './rawData';
import CheckBox from '../../../CheckBox';

const AsideTourCategory = (props) => {
  const {} = props;

  return (
    <div className={style.asideTourCategory}>
      <h4 className={style.headTitle}>Danh mục</h4>
      <div className={style.asideInner}>
        {categoryTour.map((item, i) => (
          <div key={`${i}-2023`} className={style.asideItem}>
            <CheckBox label={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsideTourCategory;
