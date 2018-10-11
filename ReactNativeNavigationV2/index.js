import { Navigation } from "react-native-navigation";

import Home from "./scenes/Home";
import PushedView from "./scenes/PushedView";

Navigation.registerComponent(`ReactNativeNavigationV2.Home`, () => Home);
Navigation.registerComponent(`ReactNativeNavigationV2.PushedView`, () => PushedView);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: 'ReactNativeNavigationV2.Home',
                        options: {
                            topBar: {
                                title: {
                                    text: 'Home'
                                }
                            }
                        }
                    }
                }]
            }
        }
    });
});
