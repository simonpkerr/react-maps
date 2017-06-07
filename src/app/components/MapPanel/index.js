import React, { PropTypes, Component } from 'react';
// import L from 'leaflet';
import {
  Map,
  ImageOverlay,
  Rectangle,
  Popup
} from 'react-leaflet-universal';
import bgImage from 'assets/images/blue-print.jpg';

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
      lat: 150,
      lng: 150,
      zoom: 1,
      tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      imageBounds: [
        [-150, -150],
        [300, 300]
      ],
      mapBounds: [
        [50, 50],
        [200, 200]
      ],
      bgImageUrl: bgImage
    };
  }

  componentWillMount() {
    // configureIcons();
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const rectangleBounds = [[0, 100], [300, 400]];
    return (
      <Wrapper>
        <Map
          center={position}
          zoom={this.state.zoom}
        >
          <ImageOverlay
            bounds={this.state.imageBounds}
            url={this.state.bgImageUrl}
          />
          <Rectangle bounds={rectangleBounds} />
          {/*
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url={this.state.tileLayer}
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
            </Popup>
          </Marker>
          */}
        </Map>
      </Wrapper>
    );
  }
}
