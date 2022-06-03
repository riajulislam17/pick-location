import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import {
  findLocation,
  searchLocation,
} from "../../features/location/locationSlice";
import LocationDetails from "../Home/LocationDetails/LocationDetails";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [selectText, setSelectText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [resultShow, setResultShow] = useState(false);
  const locations = useSelector((state) => state.location.searchResult);

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    dispatch(searchLocation(searchText));
  };

  return (
    <div>
      <h3 className="fw-bold">
        Pick <span className="text-success">Location</span>
      </h3>

      <input
        type="text"
        className={clicked ? "onClicked" : "offClicked"}
        placeholder="Search Location."
        onChange={handleSearch}
        onFocus={() => {
          setClicked(true);
          setResultShow(false);
          setSelectText("");
        }}
        onBlur={(e) => setClicked(false)}
        value={selectText ? selectText : searchText}
        required
      />
      {resultShow ? (
        <LocationDetails></LocationDetails>
      ) : (
        <div className="overflow-auto" style={{maxHeight: "400px"}}>
          <div className="h-75 shadow">
          {locations &&
            locations.map((location) => (
              <button
                key={location.id}
                className="d-block my-1 border border-0 text-start w-100 overflow-y-scroll p-1"
                onClick={() => {
                  dispatch(findLocation(location.id));
                  setResultShow(true);
                  setSelectText(location.address);
                }}
              >
                <h5>{location.address}</h5>
                <h6>
                  {location.address}, {location.area}, {location.city}
                </h6>
                <span className="bg-secondary rounded px-2 py-1">
                  {location.pType}
                </span>
              </button>
            ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default Header;
