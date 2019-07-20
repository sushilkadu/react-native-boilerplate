import SplashStore from "./../entry/splashstore";
import LoginStore from "../login/loginstore";

export default function() {
  const splashStore = new SplashStore();
  const loginStore = new LoginStore();

  return {
    splashStore,
    loginStore
  };
}
