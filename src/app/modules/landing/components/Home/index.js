import React, { PureComponent } from 'react';
import Container from 'app/components/Container';
import MapPanel from 'app/components/MapPanel';
import Wrapper from './Wrapper';

export default class Home extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Container>
          <h1>Maps in React</h1>
          <MapPanel />
        </Container>
      </Wrapper>
    );
  }
}
