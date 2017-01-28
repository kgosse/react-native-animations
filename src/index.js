
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Header, Title, Content, Button } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>React Native Animations</Title>
        </Header>

        <Content>
          <Button block> Primary </Button>
          <Button block success> Success </Button>
          <Button block info> Info </Button>
          <Button block warning> Warning </Button>
          <Button block danger> Danger </Button>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

