import FONTS, { FontType } from "../assets/fonts";

const COLORS = {
  backgroundColor: "#F9F9F9",
  white: "#FFFFFF",
  darkBlue: "#181D27",
  grey: "#757575",
  greens: {
    office: "#2E7D32",
  },
  orangePeel: "#FF9800",
};

const createFontCSS = (
  size = 14,
  fontFamily: FontType = FONTS.regularRoboto,
  lineHeight?: number | undefined
) => {
  return `
      font-size: ${size}px;
      ${fontFamily?.length > 0 ? `font-family: ${fontFamily}` : ""};
      ${
        lineHeight !== null && lineHeight !== undefined
          ? `line-height: ${lineHeight}px;`
          : ""
      };
    `;
};

const fonts = {
  h1: createFontCSS(24, FONTS.regularRoboto, 24),
  h1Bold: createFontCSS(24, FONTS.boldRoboto, 24),
  h1BoldItalic: createFontCSS(24, FONTS.boldItalicRoboto, 24),
  h2: createFontCSS(22, FONTS.mediumRoboto, 22),
  h3: createFontCSS(18, FONTS.regularRoboto, 20),
  h3Medium: createFontCSS(18, FONTS.mediumRoboto, 20),
  h4: createFontCSS(16, FONTS.regularRoboto, 20),
  h5: createFontCSS(15, FONTS.regularRoboto, 20),
  regular: createFontCSS(14, FONTS.regularRoboto, 20),
  regularItalic: createFontCSS(14, FONTS.italicRoboto, 20),
  boldItalicOpenSans: createFontCSS(14, FONTS.boldItalicRoboto, 20),
  small: createFontCSS(12, FONTS.regularRoboto, 20),
  smallItalic: createFontCSS(12, FONTS.italicRoboto, 20),
  smaller: createFontCSS(9, FONTS.regularRoboto, 20),
  h4Medium: createFontCSS(16, FONTS.mediumRoboto, 20),
  h4MediumItalic: createFontCSS(16, FONTS.mediumItalicRoboto, 20),
  h5Medium: createFontCSS(15, FONTS.mediumRoboto, 17),
  regularMedium: createFontCSS(14, FONTS.mediumRoboto, 20),
  smallMedium: createFontCSS(12, FONTS.mediumRoboto, 20),
  smallerMedium: createFontCSS(9, FONTS.mediumRoboto, 20),
  h4Bold: createFontCSS(16, FONTS.boldRoboto, 20),
  h5Bold: createFontCSS(15, FONTS.boldRoboto, 17),
  regularBold: createFontCSS(14, FONTS.boldRoboto, 20),
  smallBold: createFontCSS(12, FONTS.boldRoboto, 20),
  smallerBold: createFontCSS(9, FONTS.boldRoboto, 20),
};

const createButtonContainerCSS = (
  verticalPadding: number,
  horizontalPadding: number,
  type: "primary" | "secondary" | "tertiary" | "transparent"
) => {
  let backgroundColor = "transparent";
  let radius = "";
  let newHeight = "auto";
  let alignSelf = "";
  let paddingHorizontal = "0px";
  let paddingVertical = "0px";
  switch (type) {
    case "primary":
      backgroundColor = `${COLORS.greens.office}`;
      radius = `${radiuses.veryBig}`;
      paddingHorizontal = `${horizontalPadding}px`;
      paddingVertical = `${verticalPadding}px`;
      break;
    case "secondary":
      backgroundColor = `${COLORS.white}`;
      radius = `${radiuses.veryBig}`;
      paddingHorizontal = `${horizontalPadding}px`;
      paddingVertical = `${verticalPadding}px`;
      break;
    case "transparent":
      backgroundColor = "transparent";
  }

  return `
    align-items: center;
    justify-content: center;
    ${radius};
    padding-horizontal: ${paddingHorizontal};
    padding-vertical: ${paddingVertical};
    background-color: ${backgroundColor};
    height: ${newHeight};
    ${alignSelf};
    `;
};

const createButtonLabelCSS = (
  type: "primary" | "secondary" | "tertiary"
): string => {
  let color = `${COLORS.white}`;
  let font = fonts.h3Medium;
  switch (type) {
    case "primary":
      color = `${COLORS.white}`;
      break;
    case "secondary":
      color = `${COLORS.grey}`;
      break;
  }
  return `
    text-align: center;
    ${font};
    color: ${color};
  `;
};

export const RADIUS_SIZES = {
  verySmall: 4,
  small: 8,
  regular: 10,
  big: 12,
  veryBig: 16,
  forHeight: (value: number) => value / 2,
};

const radiuses = {
  verySmall: `border-radius: ${RADIUS_SIZES.verySmall}px;`,
  small: `border-radius: ${RADIUS_SIZES.small}px;`,
  regular: `border-radius: ${RADIUS_SIZES.regular}px;`,
  big: `border-radius: ${RADIUS_SIZES.big}px;`,
  veryBig: `border-radius: ${RADIUS_SIZES.veryBig}px;`,
  forHeight: (value: number) =>
    `border-radius: ${RADIUS_SIZES.forHeight(value)}px;`,
};

export type NavigationBarType = "white" | "transparent";

export type NavigationBarTheme = {
  primaryBackgroundColor: string;
  primaryForegroundColor: string;
  secondaryBackgroundColor?: string;
  secondaryForegroundColor?: string;
  isLight: boolean;
};

const navigationBarThemes: { [key in NavigationBarType]: NavigationBarTheme } =
  {
    white: {
      primaryBackgroundColor: COLORS.backgroundColor,
      primaryForegroundColor: COLORS.darkBlue,
      isLight: false,
    },
    transparent: {
      primaryBackgroundColor: "transparent",
      primaryForegroundColor: COLORS.darkBlue,
      secondaryBackgroundColor: COLORS.backgroundColor,
      secondaryForegroundColor: COLORS.darkBlue,
      isLight: false,
    },
  };

const navigationBarFonts = {
  title: fonts.h1Bold,
  titleItalic: fonts.h1BoldItalic,
  subtitle: fonts.small,
  subtitleItalic: fonts.smallItalic,
};

const navigationBarFontColors = {
  white: COLORS.white,
};

export const AppCSS = {
  colors: COLORS,
  fonts,
  radiuses,
  button: {
    label: {
      primary: createButtonLabelCSS("primary"),
      secondary: createButtonLabelCSS("secondary"),
    },
    container: {
      primary: createButtonContainerCSS(16, 32, "primary"),
      secondary: createButtonContainerCSS(16, 32, "secondary"),
    },
  },
  navigationBar: {
    themes: navigationBarThemes,
    fonts: navigationBarFonts,
    fontColors: navigationBarFontColors,
  },
};
