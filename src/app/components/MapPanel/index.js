import React, { PropTypes, Component } from 'react';
// import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal';
import 'leaflet_assets/leaflet.css';
import './style.css';
import Wrapper from './Wrapper';

// const configureIcons = () => {
//   delete L.Icon.Default.prototype._getIconUrl();
//
//   L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet_assets/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet_assets/images/marker-icon.png'),
//     shadowUrl: require('leaflet_assets/images/marker-shadow.png'),
//   });
// };

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

  componentWillMount() {
    // configureIcons();
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
