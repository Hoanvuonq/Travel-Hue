import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import style from './input.module.scss';

const Input = (props) => {
  const {
    type = 'text',
    autoComplete = 'off',
    completes = {},
    placeholder = ' ',
    value,
    className,
    containerClassName,
    name,
    readOnly,
    error,
    iconRight,
    onSelect,
    onChange,
    onClickIconRight,
    label,
  } = props;

  const [showComplete, setShowComplete] = React.useState(false);

  const refWrap = useOnClickOutside(() => {
    setShowComplete(false);
  });

  const handleFocus = () => {
    setShowComplete(true);
  };

  const handleClickSelectItem = (selectItem) => {
    return () => {
      onSelect?.(selectItem);
      setShowComplete(false);
    };
  };

  return (
    <div ref={refWrap} className={classNames(style.wrap, error && style.error, containerClassName)}>
      <div className={style.wrapInput}>
        <input
          autoComplete={autoComplete}
          type={type}
          placeholder={placeholder}
          name={name}
          className={classNames(style.input, className)}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          readOnly={readOnly}
        />
        {label && <span className={style.label}>{label}</span>}
        {iconRight && value && (
          <div onClick={onClickIconRight} className={style.iconRight}>
            {iconRight}
          </div>
        )}
      </div>
      {error && <span className={style.labelError}>{error}</span>}
      {completes && Object.keys(completes).length > 0 && (
        <>
          <div className={style.space}></div>
          <div className={classNames(style.selects, showComplete && style.completeActive)}>
            {Object.keys(completes).map((selectItem, i) => (
              <div
                onClick={handleClickSelectItem(selectItem)}
                className={style.selectItem}
                key={`${i}-${selectItem}`}
              >
                {completes[selectItem]}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  completes: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  iconRight: PropTypes.node,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  onClickIconRight: PropTypes.func,
};

export default Input;
