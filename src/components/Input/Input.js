import * as React from 'react';

import style from './input.module.scss';
import useOnClickOutside from '../../hooks/useOnClickOutside ';
import {FaTimes} from 'react-icons/fa';

const Input = (props) => {
  const {
    type = 'text',
    autoComplete = 'off',
    completes = {},
    clearable,
    value,
    placeholder,
    className,
    containerClassName,
    name,
    readOnly,
    error,
    onSelect,
    onChange,
    onClickClearText,
  } = props;

  const [showComplete, setShowComplete] = React.useState(false);

  const ref = useOnClickOutside(() => {
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
    <div
      ref={ref}
      className={`${style.wrap} ${error ? style.error : ''} ${containerClassName || ''}`}
    >
      <div className={style.wrapInput}>
        <input
          autoComplete={autoComplete}
          type={type}
          placeholder=" "
          name={name}
          className={`${style.input} ${className || ''}`}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          readOnly={readOnly}
        />
        {placeholder && <span className={style.placeholder}>{placeholder}</span>}
        {clearable && value && (
          <span onClick={onClickClearText} className={style.clearText}>
            <FaTimes />
          </span>
        )}
      </div>
      {error && <span className={style.labelError}>{error}</span>}
      {completes && Object.keys(completes).length > 0 && (
        <>
          <div className={style.space}></div>
          <div className={`${style.selects} ${showComplete ? style.completeActive : ''}`}>
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

export default Input;
