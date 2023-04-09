import {
  NavigationButtonTypeLeft,
  NavigationButtonTypeRight,
} from "../components/NavigationButton/types";
import { NavigationBarTheme } from "../../../utils/styled";

export type NavigationContainerType = "justFlex" | "navigation";
export type ScreenContainerType = "fullScreen" | "popover";

export interface NavigationHeaderProps {
  title?: string;
  leftButton?: NavigationButtonTypeLeft;
  rightButton?: NavigationButtonTypeRight;
  onLeftTap?: () => void;
  onRightTap?: () => void;
  type?: NavigationContainerType;
  screenType?: ScreenContainerType;
  theme?: NavigationBarTheme;
  isTransparent?: boolean;
  titleIsItalic?: boolean;
  profileSub?: string;
}
