/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";

import Home from "./scenes/Home";
import PushedView from "./scenes/PushedView";

export default createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home"
        }
    },
    PushedView: {
        screen: PushedView
    }
});
