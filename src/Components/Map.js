import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import axios from 'axios';
import LocationInfo from './LocationInfo';

export const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [eventType, setEventType] = useState(8);

  const markers = eventData.map((event) => {
    if (event.categories[0].id === eventType) {
      const coords = {
        eventLat: event.geometries[0].coordinates[1],
        eventLon: event.geometries[0].coordinates[0],
        id: event,
      };
      return (
        <LocationMarker
          lat={coords.eventLat}
          lng={coords.eventLon}
          onClick={() => setLocationInfo({ id: event.id, title: event.title })}
        />
      );
    }
    return null;
  });

  // useEffect(() => {
  //   if (eventType === 8) {
  //     console.log('heat');
  //   } else if (eventType === 10) {
  //     console.log('Storm');
  //   }
  // }, [eventType]);

  return (
    <div className="map-section">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDxhwG8T7H-UblnT1Cw8sQm36LuyZyKTiY' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} />}
      <div className="button-section">
        <button className="switch-buttons" onClick={() => setEventType(10)}>
          Cold
        </button>
        <button
          className="switch-buttons"
          onClick={() => setLocationInfo(null)}
        >
          x
        </button>
      </div>
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
