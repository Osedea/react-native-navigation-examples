/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { StackNavigator } from 'react-navigation';

import Home from "./scenes/Home";
import Splash from "./scenes/Splash";

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Splash: {
    screen: Splash,
  },
});
