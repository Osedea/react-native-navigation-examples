/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import Home from "./scenes/Home";
import PushedView from "./scenes/PushedView";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <NativeRouter>
          <View style={styles.container}>
              <Route exact path="/" component={Home} />
              <Route path={"/pushed"} component={PushedView} />
          </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
