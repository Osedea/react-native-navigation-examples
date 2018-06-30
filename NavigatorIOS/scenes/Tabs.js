/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, TabBarIOS, Text, View } from "react-native";

type Props = {};
export default class Splash extends Component<Props> {
    state = { selected: 0 };

    render() {
        return (
            <TabBarIOS style={styles.container}>
                <TabBarIOS.Item
                    systemIcon="downloads"
                    selected={this.state.selected === 0}
                    onPress={() => this.setState({ selected: 0 })}
                >
                    <View style={styles.container}>
                        <Text>Splash</Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="favorites"
                    selected={this.state.selected === 1}
                    onPress={() => this.setState({ selected: 1 })}
                >
                    <View style={styles.container}>
                        <Text>Splosh</Text>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
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
