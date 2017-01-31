import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Button, Icon } from 'native-base';


export default class Card extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.ValueXY();
    this._value = {x: 0, y: 0};
    this.animatedValue.addListener((value) => this._value = value);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y,
        });
        this.animatedValue.setValue({ x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValue.x, dy: this.animatedValue.y}
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValue.flattenOffset();
        Animated.decay(this.animatedValue, {
          deceleration: 0.997,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start();
      },
    })
  }

  render() {

    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform()
    };

    return (
      <Container>
        <Header>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>Draggable Card</Title>
        </Header>

        <View style={styles.container}>
          <Animated.View style={[styles.box, animatedStyle]} {...this.panResponder.panHandlers}>
            <Text style={styles.text}>Drag Me</Text>
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
    width: 150,
    height: 150,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 20,
  }
});