import React from "react";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { DefaultTheme } from "@react-navigation/native";
import { Platform } from "react-native";

const modalAnimationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};
const pushAnimationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const navigationDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export const pushScreenOptions = {
  gestureDirection: "horizontal",
  gestureEnabled: true,
  presentation: "card",
  headerShown: false,
  ...pushAnimationOptions,
};

const enableRootSwipeToDismissScreenOptions = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
};

export const pushAnimationsAndEnableGesture = {
  ...pushAnimationOptions,
  ...enableRootSwipeToDismissScreenOptions,
  headerShown: false,
};

export const rootScreenOptions = {
  ...pushScreenOptions,
};

export const modalScreenOptions = {
  gestureDirection: "vertical",
  gestureEnabled: Platform.OS === "ios",
  headerShown: false,
  presentation: "modal",
  ...modalAnimationOptions,
  cardOverlayEnabled: true,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const forFade = ({ current: { progress } }) => {
  return {
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.6, 0.65, 0.85, 1],
        outputRange: [0, 0, 0.15, 0.65, 1],
        extrapolate: "clamp",
      }),
    },
  };
};

export const customAlertOptions = {
  gestureDirection: "vertical",
  gestureEnabled: false,
  headerShown: false,
  presentation: "transparentModal",
  cardStyle: {
    // backgroundColor: AppCSS.colors.utility.activityIndicator.background,
  },
  cardStyleInterpolator: forFade,
};
