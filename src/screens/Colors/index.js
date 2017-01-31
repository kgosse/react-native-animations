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


export default class Colors extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start();
  }


  render() {

    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0,0,0)', 'rgb(51, 250, 170)']
    });

    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.animatedValue }
      ]
    };

    return (
      <Container>
        <Header>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>Colors Animation</Title>
        </Header>

        <View style={styles.container}>
          <Animated.View style={[styles.box, animatedStyle]} />
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
  }
});