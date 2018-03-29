import { Navigation } from "react-native-navigation";

import { registerScreens } from "./App";

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: "ReactNativeNavigation.Home",
        title: "Home"
    }
});
