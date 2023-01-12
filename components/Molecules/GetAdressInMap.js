import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const GetAdressInMap = () => {
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

  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded && state.addressCoordinate !== null) {
      setScriptLoaded(true);
    }
  }, [scriptLoaded, state.addressCoordinate]);

  return (
    <div className="h-56 w-10/12 lg:ml-14 lg:w-7/12 bg-white shadow-[inset_0px_0px_15px_30px_#FAFAFA]">
      {scriptLoaded && (
        <LoadScript
          googleMapsApiKey="AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI"
          onLoad={() => setScriptLoaded(true)}
        >
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
      )}
    </div>
  );
};

export default GetAdressInMap;
