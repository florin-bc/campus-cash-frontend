export type NavigationButtonTypeLeft = "back" | "close" | "settings";

export type NavigationButtonTypeRight =
  | "settings"
  | "deselectAll"
  | "save"
  | "unsave"
  | "clearAll"
  | "location"
  | "species"
  | "close"
  | "info";

export type NavigationButtonType =
  | NavigationButtonTypeLeft
  | NavigationButtonTypeRight;
