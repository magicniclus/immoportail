import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactMapGL from "react-map-gl";

const KEY_API =
  "pk.eyJ1IjoibWFnaWNuaWNsdXMiLCJhIjoiY2w1cG13bDdnMW96YTNvcGp5a3hnanE4bCJ9.o82GL_7qj6RuhYkF84fTZw";

const GetAddressInMap = () => {
  const state = useSelector((state) => state);
  const [viewState, setViewState] = useState({
    longitude: state.addressCoordinate?.lng
      ? state.addressCoordinate.lng
      : -0.57918,
    latitude: state.addressCoordinate?.lat
      ? state.addressCoordinate.lat
      : 44.837789,
    zoom: 14,
    height: "80vh",
    width: "100%",
  });

  useEffect(() => {
    if (state.addressCoordinate) {
      setViewState((prevState) => ({
        ...prevState,
        latitude: state.addressCoordinate.lat,
        longitude: state.addressCoordinate.lng,
      }));
    }
  }, [state.addressCoordinate]);

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
