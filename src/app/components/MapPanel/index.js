import React, { PropTypes, Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal';
import 'leaflet_assets/leaflet.css';
import Wrapper from './Wrapper';

export default class MapPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
      tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Wrapper>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url={this.state.tileLayer}
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </Wrapper>
    );
  }
}
