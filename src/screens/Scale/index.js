import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Button, Icon } from 'native-base';

export default class Scale extends Component {
  constructor(props) {
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: .5
    }).start()
  }
  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start()
  }
  render() {

    const animatedStyle = {
      transform: [{ scale: this.animatedValue}]
    };

    return (
      <Container>
        <Header>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>Scale Animation</Title>
        </Header>

        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn}
            onPressOut={this.handlePressOut}
          >
            <Animated.View style={[styles.button, animatedStyle]}>
              <Text style={styles.text}>Press Me</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
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
  button: {
    backgroundColor: "#333",
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF"
  }
});