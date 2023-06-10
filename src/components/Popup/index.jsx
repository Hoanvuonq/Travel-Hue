import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './popup.module.scss';

const Popup = (props) => {
  const { center, visible = false, children, onClose } = props;

  return visible ? (
    <div className={styles.popupWrap}>
      <div onClick={onClose} className={styles.overlay} />
      <div className={`${styles.popupInner} ${center ? styles.center : ''}`}>{children}</div>
    </div>
  ) : (
    <></>
  );
};

Popup.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
  center: PropTypes.bool,
};

export default React.memo(Popup);
