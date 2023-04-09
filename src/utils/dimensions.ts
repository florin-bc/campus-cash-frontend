import Constants from "expo-constants";
import { Dimensions, Platform } from "react-native";

export const DEVICE_HAS_NOTCH: boolean = (() => {
  return Platform.OS === "ios" && Constants.statusBarHeight > 20;
})();

export const STATUS_BAR_HEIGHT: number = (() => Constants.statusBarHeight)();
export const CHIN_HEIGHT: number = (() =>
  Platform.OS === "ios" && DEVICE_HAS_NOTCH ? 34 : 0)();
export const CHIN_HEIGHT_TRIMMED = CHIN_HEIGHT > 24 ? CHIN_HEIGHT - 24 : 0;
export const SCREEN_WIDTH: number = (() => Dimensions.get("window").width)();
export const SCREEN_HEIGHT: number = (() => Dimensions.get("window").height)();

export const TOP_NAV_BAR_SIZE = 54;
export const TOP_NAV_POPOVER_OFFSET = 12;
export const TOP_NAV_BUTTON_PADDING = 16;
export const TOP_NAV_BUTTON_MAX_WIDTH = 50 + TOP_NAV_BUTTON_PADDING;
export const SEARCH_BAR_HEIGHT = 40;
export const SEARCH_BAR_ICON_SIZE = 16;
export const DOCKED_MENU_BOTTOM_PADDING = CHIN_HEIGHT_TRIMMED + 16;

export const TOAST_WARN_DURATION = 1000;
export const TOAST_ERROR_DURATION = 3000;
export const TOAST_MESSAGE_DURATION = TOAST_WARN_DURATION;
