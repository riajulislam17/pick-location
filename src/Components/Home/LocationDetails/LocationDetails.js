import React from "react";
import { useSelector } from "react-redux";

const LocationDetails = () => {
  const locations = useSelector((state) => state.location.findResult);
  return (
    <div className="pt-5">
      {locations &&
        locations.map((location) => (
          <div
            key={location.id}
            className="d-block"
          >
            <h5>{location.address}</h5>
            <h6>
              {location.address}, {location.area}, {location.city}
            </h6>
            <p>Post Code : {location.postCode}</p>
            <p>Place Code : {location.uCode}</p>
          </div>
        ))}
    </div>
  );
};

export default LocationDetails;
