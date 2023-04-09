import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings/Settings";
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
        initialRouteName={"Settings"}
        //@ts-ignore
        screenOptions={pushAnimationsAndEnableGesture}
      >
        <Stack.Screen name={"Settings"} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
