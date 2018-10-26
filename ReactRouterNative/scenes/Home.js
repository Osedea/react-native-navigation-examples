/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

type Props = {};

export default class Home extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Link to="/pushed">
                    <Text>{'Push something'}</Text>
                </Link>
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
