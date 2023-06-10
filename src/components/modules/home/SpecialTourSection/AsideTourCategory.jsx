import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setCatalog } from './SpecialTourSlice';
import style from './style.module.scss';

import CheckBox from '../../../CheckBox';
import data from '../../../../data/destinations.json';
const AsideTourCategory = (props) => {
  const {} = props;
  const dispatch = useDispatch();
  const [valueCheckBox, setValueCheckBox] = React.useState([]);

  const catalog = [...new Set(data?.map((i) => i.tenloaihinhdisan) || [])];
  const handleOnChange = (e) => {
    dispatch(setCatalog(e.target.value));
  };
  return (
    <div className={style.asideTourCategory}>
      <h4 className={style.headTitle}>Danh mục</h4>
      <div className={style.asideInner}>
        {catalog?.map((item, i) => (
          <div key={`${i}-2023`} className={style.asideItem}>
            <CheckBox label={item} value={item} onChange={handleOnChange} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsideTourCategory;
