import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const GetAdressInMap = (props) => {
  const isOk = props.isOk;

  const [scriptLoaded, setScriptLoaded] = useState(false);
  const state = useSelector((state) => state);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat:
      state.addressCoordinate !== null ? state.addressCoordinate.lat : 48.8566,
    lng:
      state.addressCoordinate !== null ? state.addressCoordinate.lng : 2.3522,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: false,
  };

  useEffect(() => {
    if (state.address !== "") {
      console.log(state.addressCoordinate);
      setScriptLoaded(true);
    }
  }, [state.addressCoordinate]);

  const getLoading = () => {
    console.log("ok");
    return (
      <LoadScript googleMapsApiKey="AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI">
        <GoogleMap
          id="map"
          mapContainerStyle={containerStyle}
          zoom={17}
          center={center}
          options={options}
          style={{ zIndex: 0 }}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  };

  const getComponent = () => {
    console.log("ok deux");
    return (
      <GoogleMap
        id="map"
        mapContainerStyle={containerStyle}
        zoom={17}
        center={center}
        options={options}
        style={{ zIndex: 0 }}
      >
        <Marker position={center} />
      </GoogleMap>
    );
  };

  return (
    <div className="h-48 w-11/12 bg-white shadow-[inset_0px_0px_15px_30px_#FAFAFA]">
      {!scriptLoaded ? getLoading() : getComponent()}
    </div>
  );
};

export default GetAdressInMap;
