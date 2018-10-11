import React from 'react'
import Router from 'react-native-easy-router'
import { Text, View } from 'react-native'

import Home from "./scenes/Home";
import PushedView from "./scenes/PushedView";

const routes = { Home, PushedView }
const App = () => <Router routes={routes} initialRoute="Home" />

export default App
