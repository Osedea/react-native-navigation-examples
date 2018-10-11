/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

import PushedView from "./PushedView";

type Props = {
    navigator: Object
};
export default class Home extends Component<Props> {
    goToPushedView = () => {
        this.props.navigator.push({
            title: "PushedView",
            component: PushedView
        });
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
