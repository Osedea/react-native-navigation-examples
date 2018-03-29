/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, StyleSheet, NavigatorIOS } from "react-native";

import Home from "./scenes/Home";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: "Home"
        }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
