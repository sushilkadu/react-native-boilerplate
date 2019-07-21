import { observable, autorun, action, runInAction } from "mobx";
import { createContext } from "react";

export default class SplashStore {
  SPLASH_TIMEOUT = 3000;

  @observable test = "This is NEW one";
  @observable routeToNext = false;

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

  @action
  splashMounted() {
    console.log("Splash mounted");
    this.routeToNext = false;
    setTimeout(() => {
      runInAction(() => {
        this.routeToNext = true;
      });
    }, this.SPLASH_TIMEOUT);
  }
}

// export const SplashStoreContext = createContext(new SplashStore());
