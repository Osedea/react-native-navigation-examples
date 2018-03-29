/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

type Props = {};
export default class Home extends Component<Props> {
  goToSplash = () => {
    Actions.splash({ title: "Splash" });
    // or Actions.push({ sceneKey: 'splash', title: 'Splash' });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.goToSplash} title={"Splish"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
