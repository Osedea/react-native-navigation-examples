# ReactNativeNavigation

```sh
yarn add react-native-navigation
react-native link react-native-navigation
```

# iOS

Modify `AppDelegate.m`

```Obj-C
#import "RCCManager.h"

...

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  [[RCCManager sharedInstance] initBridgeWithBundleURL:jsCodeLocation launchOptions:launchOptions];

  /*
  // original RN bootstrap - remove this part
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"example"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  */

...

```

# Android

Update your `buildToolsVersion` to "25.0.1"

Modify `MainActivity.java` and `MainApplication.java` (extensively)

# JS

```js
import { Navigation } from "react-native-navigation";

import { registerScreens } from "./App";

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: "ReactNativeNavigation.Home",
    title: "Home",
  }
});
```

Forget what you know, but everything is going to be ok!
