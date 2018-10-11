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
    goToPushedView = () => {
        Actions.pushedView({ title: "PushedView" });
        // or Actions.push({ sceneKey: 'pushedView', title: 'PushedView' });
    };

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.goToPushedView} title={"Push something"} />
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
