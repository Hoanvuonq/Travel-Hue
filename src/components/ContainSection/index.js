import classNames from 'classnames';
import * as React from 'react';
import PropType from 'prop-types';

import style from './style.module.scss';

const ContainSection = (props) => {
  const { title, children } = props;

  return (
    <section className={classNames('container section', style.wrap)}>
      {title && <h1 className={style.headerTitle}>{title}</h1>}
      <div className={style.body}>{children}</div>
    </section>
  );
};

ContainSection.propTypes = {
  title: PropType.string,
  children: PropType.node.isRequired,
};

export default ContainSection;
