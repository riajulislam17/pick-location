import React from "react";
import Header from "../Header/Header";
import MapBox from "../MapBox/MapBox";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-12">
            <Header></Header>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12">
            <MapBox></MapBox>
        </div>
      </div>
    </div>
  );
};

export default Home;
