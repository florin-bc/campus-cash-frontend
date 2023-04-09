import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./src/router";
import { prepareFonts } from "./src/utils/assets/fonts";
import { useCallback } from "react";
import { UIView } from "./src/utils/styled/styled";
import Providers from "./src/providers";

export default function App() {
  const fontsLoaded = prepareFonts();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <UIView onLayout={onLayoutRootView} flex={1}>
      <StatusBar style="auto" />
      <Providers>
        <RootNavigator />
      </Providers>
    </UIView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
