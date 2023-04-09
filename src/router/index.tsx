import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/auth/Auth";
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
        initialRouteName={"Auth"}
        //@ts-ignore
        screenOptions={pushAnimationsAndEnableGesture}
      >
        <Stack.Screen name={"Auth"} component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
