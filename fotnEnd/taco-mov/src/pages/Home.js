import React from "react";
import CardsMoies from "./components/CardsMoies";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className="row">
        <div className="col-md-4 col-lg-3">
          <CardsMoies />
        </div>
        <div className="col-md-4  col-lg-3">
          <CardsMoies />
        </div>
        <div className="col-md-4 col-lg-3">
          <CardsMoies />
        </div>
        <div className="col-md-4 col-lg-3">
          <CardsMoies />
        </div>
        <div className="col-md-4 col-lg-3">
          <CardsMoies />
        </div>
        <div className="col-md-4 col-lg-3">
          <CardsMoies />
        </div>
        <div className="col-md-4 col-lg-3">
          <CardsMoies />
        </div>
        <div className="col-md-4 col-lg-3">
          <CardsMoies />
        </div>
      </div>
    </div>
  );
};

export default Home;
