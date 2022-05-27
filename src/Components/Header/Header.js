import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findLocation } from "../../features/location/locationSlice";
import "./Header.css";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    dispatch(findLocation(searchText));
    e.target.reset();
  };

  const locations = useSelector((state) => state.location.searchLocation);

  return (
    <div>
      <h3>
        Bari<span className="text-success">koi</span>
      </h3>
      <form onSubmit={handleSearch} className="input-group mb-3 shadow">
        <input
          type="text"
          className="form-control py-3"
          placeholder="Search Location."
          onChange={(e) => setSearchText(e.target.value)}
        //   option={locations.map((location)=>({location.address}))}
          required
        />
      </form>
    </div>
  );
};

export default Header;
