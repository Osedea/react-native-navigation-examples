import { Navigation } from "react-native-navigation";

import Home from "./scenes/Home";
import PushedView from "./scenes/PushedView";

Navigation.registerComponent("ReactNativeNavigationV1.Home", () => Home);
Navigation.registerComponent("ReactNativeNavigationV1.PushedView", () => PushedView);

Navigation.startSingleScreenApp({
    screen: {
        screen: "ReactNativeNavigationV1.Home",
        title: "Home"
    }
});
