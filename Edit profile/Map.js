/*global google*/
import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
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
class Map extends Component {
    /*global google*/
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      city: "",
      area: "",
      state: "",
      country: "",
      latitude: "",
      longitude: "",
      postal_code: "",
      mapPosition: {
        lat: this.props.lat,
        lng: this.props.lng,
      },
      markerPosition: {
        lat: this.props.lat,
        lng: this.props.lng,
      },
      sort_address: "",
    };
  }
  /**
   * Get the current address from the default map position and set those values in the state
   */
  componentDidMount() {
    Geocode.fromLatLng(
      this.state.mapPosition.lat,
      this.state.mapPosition.lng
    ).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray),
          country = this.getcountry(addressArray);

        // console.log(address.split(", ")[1] == city?"":"hiii");
        // console.log(city);

        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
          country: country ? country : "",
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  /**
   * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
   *
   * @param nextProps
   * @param nextState
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.markerPosition.lat !== this.props.lat ||
      this.state.address !== nextState.address ||
      this.state.city !== nextState.city ||
      this.state.area !== nextState.area ||
      this.state.state !== nextState.state
    ) {
      return true;
    } else if (this.props.lat === nextProps.lat) {
      return false;
    }
  }
  /**
   * Get the city and set the city input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getcountry = (addressArray) => {
    let country = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && "country" === addressArray[i].types[0]) {
        country = addressArray[i].long_name;
        return country;
      }
    }
  };

  getpostal_code = (addressArray) => {
    let postal_code = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "postal_code" === addressArray[i].types[0]
      ) {
        postal_code = addressArray[i].long_name;
        return postal_code;
      }
    }
  };

  /**
   * Get the area and set the area input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getArea = (addressArray) => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };
  /**
   * Get the address and set the address input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getState = (addressArray) => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };
  /**
   * And function for city,state and address input
   * @param event
   */
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  /**
   * This Event triggers when the marker window is closed
   *
   * @param event
   */
  onInfoWindowClose = (event) => {};

  /**
   * When the marker is dragged you get the lat and long using the functions available from event object.
   * Use geocode to get the address, city, area and state from the lat and lng positions.
   * And then set those values in the state.
   *
   * @param event
   */
  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();
    //alert(newLat)
    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray),
          country = this.getcountry(addressArray),
          postal_code = this.getpostal_code(addressArray);

        var ad = str_replace(city, "", address);

        ad = str_replace(state, "", ad);
        ad = str_replace(country, "", ad);
        ad = str_replace(postal_code, "", ad);
        ad = str_replace(",,,", "", ad);
        ad = str_replace(", ,  ,", "", ad);
        ad = str_replace(",  ,", "", ad);
        // console.log(ad)
        var sort_address = str_replace(", ,", "", ad);

        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
          latitude: newLat,
          longitude: newLng,
          country: country,
          postal_code: postal_code,
          sort_address: sort_address,
          markerPosition: {
            lat: newLat,
            lng: newLng,
          },
          mapPosition: {
            lat: newLat,
            lng: newLng,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  /**
   * When the user types an address in the search box
   * @param place
   */
  onPlaceSelected = (place) => {
    // console.log( 'plc', place );
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng(),
      country = this.getcountry(addressArray),
      postal_code = this.getpostal_code(addressArray);

    var ad = str_replace(city, "", address);
    ad = str_replace(state, "", ad);
    ad = str_replace(country, "", ad);
    ad = str_replace(postal_code, "", ad);
    ad = str_replace(",,,", "", ad);
    ad = str_replace(", ,  ,", "", ad);
    ad = str_replace(",  ,", "", ad);
    var sort_address = str_replace(", ,", "", ad);

    this.setState({
      address: address ? address : "",
      area: area ? area : "",
      city: city ? city : "",
      state: state ? state : "",
      latitude: latValue,
      longitude: lngValue,
      country: country,
      postal_code: postal_code,
      sort_address: sort_address,
      markerPosition: {
        lat: latValue,
        lng: lngValue,
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };

  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          // google={ google }
          defaultZoom={this.props.zoom}
          defaultCenter={{ lat: 22.254, lng: 24.254 }}
          height="100px"
          width="100px"

        >
          {/* InfoWindow on top of marker */}
          <InfoWindow
            onClose={this.onInfoWindowClose}
            position={{
              lat: this.state.markerPosition.lat + 0.0018,
              lng: this.state.markerPosition.lng,
            }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>
                {this.state.address}
              </span>
            </div>
          </InfoWindow>
          {/*Marker*/}
          <Marker
            // google={google}
            name={"Dolores park"}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: 22.2894694,
              lng: 70.7730229,
            }}
          />
          <Marker />
          {/* For Auto complete Search Box */}
          <Autocomplete
            style={{
              width: "100%",
              height: "20px",
              paddingLeft: "16px",
              marginTop: "2px",
            }}
            onPlaceSelected={this.onPlaceSelected}
            types={["(regions)"]}
          />
        </GoogleMap>
      ))
    );
   
    // console.log("props",this.props)
    
    return (<div>
      <div>
        <input
          type="hidden"
          name="address"
          id="address_one"
          value={this.state.address}
        />
        <input
          type="hidden"
          name="latitude"
          id="latitude"
          value={this.state.latitude}
        />
        <input
          type="hidden"
          name="longitude"
          id="longitude"
          value={this.state.longitude}
        />
        <div className="form-group mb-4">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            onChange={this.onChange}
            readOnly="readOnly"
            value={this.state.address}
          />
        </div>
      </div>
      <AsyncMap
        googleMapURL={`https:maps.googleapis.com/maps/api/js?key=AIzaSyA2DSQWdb9Yr3pAsIgy6JP7UAN3WodZepI&libraries=places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: this.props.height }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>)
    
  }
}
export default Map;
