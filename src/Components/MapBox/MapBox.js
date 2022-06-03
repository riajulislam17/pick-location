import React from "react";
import { useSelector } from "react-redux";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoicmlhanVsLWlzbGFtIiwiYSI6ImNsM29yODFvbzAydDIza2xrYXhtMHNlZHQifQ.fuBeoZw11tREdbpGJ0iWBQ";
  const location = useSelector((state) => state.location.findResult);
  return (
    <div>
      {location[0] ? (
        <Map
          initialViewState={{
            longitude: location[0].longitude,
            latitude: location[0].latitude,
            zoom: 15,
          }}
          style={{ width: "100%", height: 600 }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          // mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <Marker
            style={{ position: "absolute" }}
            longitude={location[0].longitude}
            latitude={location[0].latitude}
            color="red"
          />
        </Map>
      ) : (
        <Map
          initialViewState={{
            longitude: 90.39408891592521,
            latitude: 23.86523106661817,
            zoom: 14,
          }}
          style={{ width: "100%", height: 600 }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          // mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <Marker
            longitude={90.39408891592521}
            latitude={23.86523106661817}
            color="red"
          />
        </Map>
      )}
    </div>
  );
};

export default MapBox;
