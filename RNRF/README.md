# RNRF

```sh
yarn add react-native-router-flux
```

```js
import { Router, Stack, Scene } from "react-native-router-flux";

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} title="Home" />
      <Scene key="splash" component={Splash} />
    </Stack>
  </Router>
);

export default App;
```