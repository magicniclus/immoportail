import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const KEY_API = "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI";

const GetAddressInMap = () => {
  const customMarker = "/vector/localizationHouse.png";
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const state = useSelector((state) => state);
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const [center, setCenter] = useState({
    lat: state.addressCoordinate?.lat ?? 48.8566,
    lng: state.addressCoordinate?.lng ?? 2.3522,
  });

  const options = {
    disableDefaultUI: true,
    zoomControl: false,
  };

  useEffect(() => {
    setCenter({
      lat: state.addressCoordinate?.lat ?? 48.8566,
      lng: state.addressCoordinate?.lng ?? 2.3522,
    });
  }, [state.addressCoordinate]);

  useEffect(() => {
    if (state.address !== "" && state.addressCoordinate !== null) {
      setScriptLoaded(true);
    }
  }, [state.addressCoordinate, state.address]);

  const markerPosition = {
    lat: state.addressCoordinate?.lat ?? 48.8566,
    lng: state.addressCoordinate?.lng ?? 2.3522,
  };

  return (
    <div className="h-48 w-11/12 bg-white shadow-[inset_0px_0px_15px_30px_#FAFAFA]">
      {!scriptLoaded ? (
        <LoadScript
          googleMapsApiKey={KEY_API}
          onLoad={() => setScriptLoaded(true)}
        >
          <GoogleMap
            id="map"
            mapContainerStyle={containerStyle}
            zoom={18}
            center={center}
            options={options}
          />
        </LoadScript>
      ) : (
        <GoogleMap
          id="map"
          mapContainerStyle={containerStyle}
          zoom={18}
          center={center}
          options={options}
        >
          <Marker position={markerPosition} icon={customMarker} />
        </GoogleMap>
      )}
    </div>
  );
};

export default GetAddressInMap;
