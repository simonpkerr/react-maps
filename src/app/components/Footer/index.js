import React, { PureComponent } from 'react';
import Container from 'app/components/Container';
import Wrapper from './Wrapper';

export default class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Container>
          <span>Maps</span>
        </Container>
      </Wrapper>
    );
  }
}
