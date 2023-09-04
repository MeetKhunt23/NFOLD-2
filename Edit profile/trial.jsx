/*global google*/
import React, { useEffect, useState } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
// import { GoogleMapsAPI } from '../client-config';
const user_id = localStorage.getItem("user_id")
  ? localStorage.getItem("user_id")
  : "0";

Geocode.setApiKey("AIzaSyA2DSQWdb9Yr3pAsIgy6JP7UAN3WodZepI");
Geocode.enableDebug();
var str_replace = require("str_replace");

const Trial = (props) => {
    /*global google*/
  var str_replace = require("str_replace");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [area, setarea] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const [postal_code, setpostal_code] = useState("");
  const [mapPosition, setmapPosition] = useState({
    lat: props.lat,
    lng: props.lng,
  });
  const [markerPosition, setmarkerPosition] = useState({
    lat: props.lat,
    lng: props.lng,
  });
  const [sort_address, setsort_address] = "";
  const AsyncMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        google={this.props.google}
        defaultZoom={props.zoom}
        defaultCenter={{ lat: 22.254, lng: 24.254 }}
      >
        {/* InfoWindow on top of marker */}
        <InfoWindow
          onClose={this.onInfoWindowClose}
          position={{
            lat: markerPosition.lat + 0.0018,
            lng: markerPosition.lng,
          }}
        >
          <div>
            <span style={{ padding: 0, margin: 0 }}>{address}</span>
          </div>
        </InfoWindow>
        {/*Marker*/}
        <Marker
          name={"Dolores park"}
          draggable={true}
          onDragEnd={this.onMarkerDragEnd}
          position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
        />
        <Marker />
        {/* For Auto complete Search Box */}
        <Autocomplete
          style={{
            width: "100%",
            height: "40px",
            paddingLeft: "16px",
            marginTop: "2px",
          }}
          onPlaceSelected={this.onPlaceSelected}
          types={["(regions)"]}
        />
      </GoogleMap>
    ))
  );

  const onChange = () => {};

  let map;
  if (props.lat !== undefined) {
    map = (
      <div>
        <div>
          <input
            type="hidden"
            name="address"
            id="address_one"
            value={address}
          />
          <input type="hidden" name="latitude" id="latitude" value={latitude} />
          <input
            type="hidden"
            name="longitude"
            id="longitude"
            value={longitude}
          />

          <div className="form-group mb-4">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={onChange}
              readOnly="readOnly"
              value={address}
            />
          </div>
        </div>

        <AsyncMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2DSQWdb9Yr3pAsIgy6JP7UAN3WodZepI&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: props.height }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  } else {
    map = <div style={{ height: props.height }}>heyy</div>;
  }

  return map;
};

export default Trial;
