import SwipeNavigator from 'react-native-swipe-navigation';

import Home from "./scenes/Home";
import PushedView from "./scenes/PushedView";

const Navigator = SwipeNavigator({
  Home: {
    screen: Home,
    right: 'PushedView',
  },

  PushedView: {
    screen: PushedView,
    type: 'push',
    right: 'PushedView',
  },
});

export default Navigator
