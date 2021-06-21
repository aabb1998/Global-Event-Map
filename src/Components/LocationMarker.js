import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import baselineLocalFireDepartment from '@iconify-icons/ic/baseline-local-fire-department';

function LocationMarker({ lat, lng, onClick }) {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={baselineLocalFireDepartment} />
    </div>
  );
}

export default LocationMarker;
