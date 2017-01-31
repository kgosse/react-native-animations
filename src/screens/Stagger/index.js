import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Button, Icon } from 'native-base';

const {height} = Dimensions.get("window");

export default class animatedbasic extends Component {

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.stagger(300, [
      Animated.timing(this.animatedValue1, {
        toValue: height,
        duration: 1500
      }),
      Animated.timing(this.animatedValue2, {
        toValue: height,
        duration: 3000
      }),
      Animated.timing(this.animatedValue3, {
        toValue: 500,
        duration: 400
      })
    ]).start();
  }


  render() {
    const animatedStyle1 = {
      height: this.animatedValue1
    }
    const animatedStyle2 = {
      height: this.animatedValue2
    }
    const animatedStyle3 = {
      height: this.animatedValue3
    }
    return (
    <Container>
      <Header>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Stagger Animations</Title>
      </Header>

      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle1]} />
        <Animated.View style={[styles.box, animatedStyle2]} />
        <Animated.View style={[styles.box, animatedStyle3]} />
      </View>

    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  box: {
    flex: 1,
    backgroundColor: '#333',
    marginHorizontal: 5,
  }
});