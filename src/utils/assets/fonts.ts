import { useFonts } from "expo-font";

const boldRoboto: FontType = "Roboto-Bold";
const boldItalicRoboto: FontType = "Roboto-BoldItalic";
const italicRoboto: FontType = "Roboto-Italic";
const lightRoboto: FontType = "Roboto-Light";
const lightItalicRoboto: FontType = "Roboto-LightItalic";
const mediumRoboto: FontType = "Roboto-Medium";
const mediumItalicRoboto: FontType = "Roboto-MediumItalic";
const regularRoboto: FontType = "Roboto-Regular";

export const prepareFonts = () => {
  const [fontsLoaded] = useFonts({
    [boldRoboto]: require("../../../assets/fonts/Roboto-Bold.ttf"),
    [boldItalicRoboto]: require("../../../assets/fonts/Roboto-BoldItalic.ttf"),
    [italicRoboto]: require("../../../assets/fonts/Roboto-Italic.ttf"),
    [lightRoboto]: require("../../../assets/fonts/Roboto-Light.ttf"),
    [lightItalicRoboto]: require("../../../assets/fonts/Roboto-LightItalic.ttf"),
    [mediumRoboto]: require("../../../assets/fonts/Roboto-Medium.ttf"),
    [mediumItalicRoboto]: require("../../../assets/fonts/Roboto-MediumItalic.ttf"),
    [regularRoboto]: require("../../../assets/fonts/Roboto-Regular.ttf"),
  });

  return fontsLoaded;
};

export type FontType =
  | "Roboto-Bold"
  | "Roboto-BoldItalic"
  | "Roboto-Italic"
  | "Roboto-Light"
  | "Roboto-LightItalic"
  | "Roboto-Medium"
  | "Roboto-MediumItalic"
  | "Roboto-Regular";

const FONTS = {
  boldRoboto,
  boldItalicRoboto,
  italicRoboto,
  lightRoboto,
  lightItalicRoboto,
  mediumRoboto,
  mediumItalicRoboto,
  regularRoboto,
};

export default FONTS;
