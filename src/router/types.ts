import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackRouteParams = {
  Auth: undefined;
  MoodleAuth: undefined;
  Home: undefined;
  Profile: undefined;
  Loans: undefined;
};

export type RootNavigationType<T extends keyof RootStackRouteParams> =
  StackNavigationProp<RootStackRouteParams, T>;
export type RootRouteType<T extends keyof RootStackRouteParams> = RouteProp<
  RootStackRouteParams,
  T
>;
