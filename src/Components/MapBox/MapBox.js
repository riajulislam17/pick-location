import React from "react";
import { useSelector } from "react-redux";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoicmlhanVsLWlzbGFtIiwiYSI6ImNsM29yODFvbzAydDIza2xrYXhtMHNlZHQifQ.fuBeoZw11tREdbpGJ0iWBQ";
  const locations = useSelector((state) => state.location.searchResult);
  return (
    <div>
      {locations &&
        locations.map((location) => (
          <Map
            key={location.id}
            initialViewState={{
              latitude: location.latitude,
              longitude: location.longitude,
              zoom: 15,
            }}
            style={{ width: "auto", height: "auto" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <Marker
              longitude={location.longitude}
              latitude={location.latitude}
              color={
                (location.pType === "healthcare" && "blue") ||
                (location.pType === "Religious Place" && "green") ||
                (location.pType === "Education" && "warning") ||
                (location.pType === "Admin" && "danger") ||
                (location.pType === "Commercial" && "secondary")
              }
            />
          </Map>
        ))}

      <Map
        initialViewState={{
          latitude: 23.86523106661817,
          longitude: 90.39408891592521,
          zoom: 14,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          longitude={90.39408891592521}
          latitude={23.86523106661817}
          color="red"
        />
      </Map>
    </div>
  );
};

export default MapBox;
