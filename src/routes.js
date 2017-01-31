import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './screens/Home';
import Timing from './screens/Timing';
import Scale from './screens/Scale';
import Card from './screens/Card';
import Colors from './screens/Colors';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home" component={Home} hideNavBar initial={true} />
          <Scene key="Timing" component={Timing} hideNavBar />
          <Scene key="Scale" component={Scale} hideNavBar />
          <Scene key="Card" component={Card} hideNavBar />
          <Scene key="Colors" component={Colors} hideNavBar />
        </Scene>
      </Router>
    )
  }
}
