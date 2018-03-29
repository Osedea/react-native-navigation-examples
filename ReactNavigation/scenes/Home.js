/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

type Props = {
    navigation: Object
};
export default class Home extends Component<Props> {
    goToSplash = () => {
        this.props.navigation.navigate("Splash");
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
