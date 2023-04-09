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
import Loan from "../../src/screens/Payments/Loan/Loan"

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef = createNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef} theme={navigationDefaultTheme}>
      <Stack.Navigator
        initialRouteName={"Loan"}
        //@ts-ignore
        screenOptions={pushAnimationsAndEnableGesture}
      >
        <Stack.Screen name={"Loan"} component={Loan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
