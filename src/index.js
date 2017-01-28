
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

        <Content style={styles.content}>
          <Button block style={styles.button}> Styles Animation </Button>
          <Button block style={styles.button}> Scale Animation </Button>
          <Button block style={styles.button}> Draggable Card </Button>
          <Button block style={styles.button}> Colors Animation </Button>
          <Button block style={styles.button}> Rotation Animation </Button>
          <Button block style={styles.button}> Sequence Animation </Button>
          <Button block style={styles.button}> Stagger Animations </Button>
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
  content: {
    margin: 5,
  },
  button: {
    margin: 5,
  }
});

