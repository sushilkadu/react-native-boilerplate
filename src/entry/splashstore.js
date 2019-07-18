import { observable, autorun } from "mobx";

export default class SplashStore {
  @observable test = "testing";

  constructor() {
    autorun(() => {
      console.log("This is autorun of splash screen");
    });
  }
}
