import React, {
  PureComponent
} from 'react';
import Container from 'app/components/Container';
import Wrapper from './Wrapper';

export default class Header extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Container>
          <span>Maps in react</span>
        </Container>
      </Wrapper>
    );
  }
}
