import { observable, autorun, action } from "mobx";
import { createContext } from "react";

class SplashStore {
  @observable test = "testing";

  count = 0;

  constructor() {
    autorun(() => {
      console.log("This is autorun of splash screen");
    });
  }

  @action
  updateTest() {
    this.count++;
    this.test = "New " + this.count;
  }
}

export const SplashStoreContext = createContext(new SplashStore());
