import { observable, autorun, action, runInAction, computed } from "mobx";
import { createContext } from "react";

export default class LoginStore {
  @observable username = "";
  @observable password = "";

  constructor() {}

  @action.bound
  setUsername(value) {
    this.username = value;
  }

  @action.bound
  setPassword(value) {
    this.password = value;
  }

  @computed
  get isLoginFormValid() {
    // TODO check username and password has correct data
    return false;
  }

  @action
  login() {
    console.log("Clicked on login: ", this.username, this.password);
  }
}

// export const SplashStoreContext = createContext(new SplashStore());
