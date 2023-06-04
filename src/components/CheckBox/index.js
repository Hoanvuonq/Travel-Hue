import * as React from 'react';
import PropType from 'prop-types';

import style from './checkbox.module.scss';

const CheckBox = (props) => {
  const { label, value, onChange } = props;

  const id = React.useId();

  return (
    <label htmlFor={id} className={style.checkboxContainer}>
      <div>
        <div className="checkbox-wrapper-4">
          <input className="inp-cbx" id={id} type="checkbox" value={value} onChange={onChange} />
          <div className="cbx" htmlFor="morning">
            <span>
              <svg width="12px" height="10px">
                <use href="#check-4"></use>
              </svg>
            </span>
            <span>{label}</span>
          </div>
          <svg className="inline-svg">
            <symbol id="check-4" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </symbol>
          </svg>
        </div>
      </div>
    </label>
  );
};

CheckBox.propTypes = {
  label: PropType.string,
  value: PropType.string,
  onChange: PropType.func,
};

export default CheckBox;
