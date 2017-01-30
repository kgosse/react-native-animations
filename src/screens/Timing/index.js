
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Button, Icon } from 'native-base';

export default class Timing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      animatedValue: new Animated.Value(100)
    };
  }

  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.state.animatedValue, {
        toValue: 200,
        duration: 1500,
        easing: Easing.bounce
      }).start()
    }, 1000);
  }

  render() {
    const animatedStyle = { height: this.state.animatedValue };
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>Styles Animation</Title>
        </Header>

          <View style={styles.content}>
              <Animated.View style={[styles.box, animatedStyle]}/>
          </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100,
  }
});
