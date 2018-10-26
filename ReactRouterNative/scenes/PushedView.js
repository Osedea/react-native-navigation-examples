/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

type Props = {
    match: {
        path: string
    }
};

export default class PushedView extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>{"I'm pushed!"}</Text>
                <Link to={`${this.props.match.path}/pushed`}>
                    <Text>{'Push more'}</Text>
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
