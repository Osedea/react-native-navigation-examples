/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";

type Props = {};
export default class Home extends Component<Props> {
    goToPushedView = () => {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'ReactNativeNavigationV2.PushedView',
            options: {
              topBar: {
                title: {
                  text: 'PushedView'
                }
              }
            }
          }
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
