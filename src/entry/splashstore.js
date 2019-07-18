import { autorun } from "mobx";

export default class SplashStore {
  constructor() {
    autorun(() => {
      console.log("This is autorun of splash screen");
    });
  }
}
