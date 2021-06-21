import React from 'react';
import GoogleMapReact from 'google-map-react';

export const Map = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDEZ2H2MW0hyYe3n07r_tpZjxkhD0Nw7EI' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};
