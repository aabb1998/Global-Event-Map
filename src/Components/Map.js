import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import axios from 'axios';

export const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map((event) => {
    if (event.categories[0].id === 8) {
      const coords = {
        eventLat: event.geometries[0].coordinates[1],
        eventLon: event.geometries[0].coordinates[0],
        id: event,
      };
      return <LocationMarker lat={coords.eventLat} lng={coords.eventLon} />;
    }
    return null;
  });

  return (
    <div className="map-section">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDxhwG8T7H-UblnT1Cw8sQm36LuyZyKTiY' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.9,
  },
  zoom: 6,
};