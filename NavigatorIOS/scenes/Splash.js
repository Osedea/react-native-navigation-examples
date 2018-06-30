/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import Tabs from "./Tabs";

type Props = {
    navigator: Object
};

export default class Splash extends Component<Props> {
    goToTabs = () => {
        this.props.navigator.push({
            title: "Tabs",
            component: Tabs
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Splash</Text>
                <Button onPress={this.goToTabs} title={"Tabs"} />
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
