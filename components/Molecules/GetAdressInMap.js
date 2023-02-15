import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactMapGL from "react-map-gl";
import Image from "next/image";

const KEY_API =
  "pk.eyJ1IjoibWFnaWNuaWNsdXMiLCJhIjoiY2w1cG13bDdnMW96YTNvcGp5a3hnanE4bCJ9.o82GL_7qj6RuhYkF84fTZw";

const GetAddressInMap = () => {
  const [viewState, setViewState] = React.useState({
    longitude: -0.57918,
    latitude: 44.837789,
    zoom: 16,
    height: "80vh",
    width: "100%",
  });
  return (
    <div className="h-42 w-11/12 bg-white shadow-[inset_0px_0px_15px_30px_#FAFAFA]">
      <ReactMapGL
        {...viewState}
        mapStyle="mapbox://styles/magicniclus/cle4otd4q005401mtrktqv0wt"
        mapboxAccessToken={KEY_API}
        interactive={false}
        around="center"
        onViewportChange={(viewState) => setViewState(viewState)}
      ></ReactMapGL>
    </div>
  );
};

export default GetAddressInMap;
