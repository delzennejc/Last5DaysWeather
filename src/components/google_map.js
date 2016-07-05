import React, {Component} from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default ({lon, lat}) => {
  return (
    <GoogleMapLoader
      containerElement={
        <div style={{height: '100%'}} />
      }
      googleMapElement={
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat: lat, lng: lon}}
        />
      }
    />
  )
}
