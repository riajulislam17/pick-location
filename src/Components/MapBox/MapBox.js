import React from "react";
import { useSelector } from "react-redux";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

const MapBox = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicmlhanVsLWlzbGFtIiwiYSI6ImNsM29yODFvbzAydDIza2xrYXhtMHNlZHQifQ.fuBeoZw11tREdbpGJ0iWBQ";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  const locations = useSelector((state) => state.location.searchLocation);
  return (
    <div>
      {locations.map((location) => (
        <li key={location.id}>{location.address}</li>
      ))}
    </div>
  );
};

export default MapBox;
