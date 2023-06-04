import * as React from 'react';
import PropType from 'prop-types';

const Image = (props) => {
  const { source, width = 'auto', height = 'auto' } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${source})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width,
        height,
        paddingTop: '50%',
      }}
    ></div>
  );
};

Image.propTypes = {
  source: PropType.string.isRequired,
  width: PropType.oneOfType([PropType.string, PropType.number]),
  height: PropType.oneOfType([PropType.string, PropType.number]),
};

export default Image;
