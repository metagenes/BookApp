import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
export default class FooterPage extends Component {
  render() {
    return (
      <Container style={{marginTop: 0, height: 50}}>
        {/* <Header /> */}
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>

            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
