import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackRouteParams = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profil: undefined;
  Otokare: undefined;
  Map: undefined;
  Leaderboard: undefined;
};

export type RootNavigationType<T extends keyof RootStackRouteParams> =
  StackNavigationProp<RootStackRouteParams, T>;
export type RootRouteType<T extends keyof RootStackRouteParams> = RouteProp<
  RootStackRouteParams,
  T
>;
