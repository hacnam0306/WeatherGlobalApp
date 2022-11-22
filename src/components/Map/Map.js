import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
import ReactLoading from "react-loading";

const Map = ({ data }) => {
  return (
    <div>
      {data ? (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: data.coord.lat, lng: data.coord.lon }}>
          <Marker
            icon={{
              url: "https://cdn-icons-png.flaticon.com/128/2555/2555572.png",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            position={{ lat: data.coord.lat, lng: data.coord.lon }}
          />
        </GoogleMap>
      ) : (
        <ReactLoading
          type='spinningBubbles'
          color='#F8822B'
          height={667}
          width={375}
        />
      )}
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
