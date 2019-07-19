import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { Provider } from "mobx-react";

import App from "../App";
import getTheme from "./../native-base-theme/components";
import variables from "./../native-base-theme/variables/material";
import config from "./configureStore";

export default class Setup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stores = config();

    // console.log("STORES: ", this.props);

    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider {...stores}>
          <App />
        </Provider>
      </StyleProvider>
    );
  }
}
