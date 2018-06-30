import { Navigation } from "react-native-navigation";

import { registerScreens } from "./App";

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        {
            screen: "ReactNativeNavigation.Home",
            label: "Home",
            title: "Home"
        },
        {
            screen: "ReactNativeNavigation.Splash",
            label: "Splash",
            title: "Splash"
        }
    ]
});
