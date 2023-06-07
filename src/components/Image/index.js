import * as React from 'react';
import PropType from 'prop-types';

const Image = (props) => {
  const {
    source,
    width = 'auto',
    height = 'auto',
    backgroundSize = 'cover',
    paddingTop = '50%',
  } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${source})`,
        backgroundSize,
        backgroundPosition: 'center',
        width,
        height,
        paddingTop,
      }}
    ></div>
  );
};

Image.propTypes = {
  source: PropType.string.isRequired,
  width: PropType.oneOfType([PropType.string, PropType.number]),
  backgroundSize: PropType.oneOfType([PropType.string, PropType.number]),
  paddingTop: PropType.oneOfType([PropType.string, PropType.number]),
  height: PropType.oneOfType([PropType.string, PropType.number]),
};

export default Image;
