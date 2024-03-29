import React, { Component, useContext } from "react";

import { StyleSheet, Image, Text, View } from "react-native";
const splashscreen = require("./../../assets/icon.png");

import { Container, Content } from "native-base";

import { observer, inject } from "mobx-react";

import { SplashStoreContext } from "./../entry/splashstore";

@inject(stores => {
  return {
    splashStore: stores.splashStore
  };
})
@observer
export default class SplashComponent extends Component {
  componentWillMount() {
    const { splashStore } = this.props;

    console.log("componentWillMountNow: ", splashStore);
    splashStore.splashMounted();
    console.log("After");
  }

  render() {
    const { splashStore } = this.props;
    console.log("routeToNext: ", splashStore.routeToNext);
    if (splashStore.routeToNext) {
      // TODO route to login
      this.props.navigation.navigate("Login");
      return null;
    }

    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <Image source={splashscreen} />
          <Text
            style={{ alignSelf: "center" }}
            onPress={() => splashStore.updateTest()}
          >
            {splashStore.test}
          </Text>
        </View>
      </Container>
    );
  }
}

// @inject("splashStore")
// @inject(stores => {
//   console.log("StOrE: ", JSON.stringify(stores));

//   return {
//     splashStore: stores.splashStore
//   };
// })
// @observer
// export default (SplashComponent = observer(() => {
//   const splashStore = useContext(SplashStoreContext);
//   // // const { splashStore } = this.props;
//   console.log("SplashCOntext: ", splashStore);
//   // splashStore.test = 2;
//   return (
//     <Container style={styles.container}>
//       <View style={styles.content}>
//         <Image source={splashscreen} />
//         <Text
//           style={{ alignSelf: "center" }}
//           onPress={() => splashStore.updateTest()}
//         >
//           {splashStore.test}
//         </Text>
//       </View>
//     </Container>
//   );
// }));

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
