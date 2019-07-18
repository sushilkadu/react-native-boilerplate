import React, { Component } from "react";

import { StyleSheet, Image, Text, View } from "react-native";
const splashscreen = require("./../../assets/icon.png");

import { Container, Content } from "native-base";

import { observer, inject } from "mobx-react";

// @inject("splashStore")
@observer
export default class SplashComponent extends Component {
  render() {
    const { splashStore } = this.props;
    console.log("The Splashstore: ", this.props);

    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <Image source={splashscreen} />
          <Text style={{ alignSelf: "center" }}>App Name</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    alignItems: "center"
  }
});
