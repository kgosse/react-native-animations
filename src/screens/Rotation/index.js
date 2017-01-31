import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Button, Icon } from 'native-base';


export default class Rotation extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start();
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0rad', '10rad'],
    });
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    };
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>Rotation Animation</Title>
        </Header>

        <View style={styles.container}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text style={styles.text}>Spinner</Text>
          </Animated.View>
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFF"
  }
});