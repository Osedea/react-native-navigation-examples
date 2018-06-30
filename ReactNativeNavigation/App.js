/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Navigation } from "react-native-navigation";

import Home from "./scenes/Home";
import Splash from "./scenes/Splash";

export function registerScreens() {
    Navigation.registerComponent("ReactNativeNavigation.Home", () => Home);
    Navigation.registerComponent("ReactNativeNavigation.Splash", () => Splash);
}
