/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";

import Home from "./scenes/Home";
import Splash from "./scenes/Splash";

export default TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            tabBarLaber: "Home"
        }
    },
    Splash: {
        screen: Splash
    }
});
