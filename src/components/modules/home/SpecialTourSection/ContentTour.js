import * as React from 'react';

import style from './style.module.scss';

const ContentTour = (props) => {
  const { children } = props;

  return <div className={style.wrapContentTour}>{children}</div>;
};

export default ContentTour;
