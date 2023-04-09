import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile/Profile";
import {
  navigationDefaultTheme,
  pushAnimationsAndEnableGesture,
} from "./navigationOptions";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef = createNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef} theme={navigationDefaultTheme}>
      <Stack.Navigator
        initialRouteName={"Profile"}
        //@ts-ignore
        screenOptions={pushAnimationsAndEnableGesture}
      >
        <Stack.Screen name={"Profile"} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
