import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/auth/Auth";
import {
  modalScreenOptions,
  navigationDefaultTheme,
  pushAnimationsAndEnableGesture,
} from "./navigationOptions";
import MoodleAuth from "../screens/auth/MoodleAuth";
import Home from "../screens/Home/indes";
import Loans from "../screens/Loans";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef = createNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef} theme={navigationDefaultTheme}>
      <Stack.Navigator
        initialRouteName={"Loans"}
        //@ts-ignore
      >
        <Stack.Group screenOptions={pushAnimationsAndEnableGesture}>
          <Stack.Screen name={"Auth"} component={Auth} />
          <Stack.Screen name={"Home"} component={Home} />
          <Stack.Screen name={"Loans"} component={Loans} />
        </Stack.Group>
        <Stack.Group screenOptions={modalScreenOptions}>
          <Stack.Screen name={"MoodleAuth"} component={MoodleAuth} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
