import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './screens/Home';
import Styles from './screens/Styles';
import Scale from './screens/Scale';
import Card from './screens/Card';
import Colors from './screens/Colors';
import Rotation from './screens/Rotation';
import Sequence from './screens/Sequence';
import Stagger from './screens/Stagger';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home" component={Home} hideNavBar initial={true} />
          <Scene key="Styles" component={Styles} hideNavBar />
          <Scene key="Scale" component={Scale} hideNavBar />
          <Scene key="Card" component={Card} hideNavBar />
          <Scene key="Colors" component={Colors} hideNavBar />
          <Scene key="Rotation" component={Rotation} hideNavBar />
          <Scene key="Sequence" component={Sequence} hideNavBar />
          <Scene key="Stagger" component={Stagger} hideNavBar />
        </Scene>
      </Router>
    )
  }
}
