import * as React from 'react';
import PropTypes from 'prop-types';

const MapIframe = (props) => {
  const { width, height, className, lat, lng } = props;

  return (
    <div
      style={{
        width,
        height,
      }}
      className={className}
    >
      <iframe
        title="123"
        width={width}
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowfullscreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBZ04Aa4RDlzGRxvtMPpKqXjaSKzJpI-kc
&q=${lat},${lng}`}
      ></iframe>
    </div>
  );
};

MapIframe.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default MapIframe;
