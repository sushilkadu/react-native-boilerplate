import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import { Root } from "native-base";
// import Home from "./container/HomeContainer";
// import BlankPage from "./container/BlankPageContainer";
// import Sidebar from "./container/SidebarContainer";
import SplashComponent from "./entry/SplashComponent";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>This is updated one</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const App = createStackNavigator(
  {
    Splash: { screen: SplashComponent }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(App);

export default AppContainer;
