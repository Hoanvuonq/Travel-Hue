import {useEffect, useRef} from 'react';

const useOnClickOutside = (handler) => {
  const ref = useRef(null);

  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handler]);

  return ref;
};

export default useOnClickOutside;
