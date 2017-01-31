
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';


import { Container, Header, Title, Content, Button } from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>React Native Animations</Title>
        </Header>

        <Content style={styles.content}>
          <Button block style={styles.button} onPress={Actions.Timing}> Styles Animation </Button>
          <Button block style={styles.button} onPress={Actions.Scale}> Scale Animation </Button>
          <Button block style={styles.button} onPress={Actions.Card}> Draggable Card </Button>
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
