/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

type Props = {
    navigation: Object
};
export default class Splash extends Component<Props> {
    goToSplash = () => {
        Actions.splash();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Splash</Text>
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
