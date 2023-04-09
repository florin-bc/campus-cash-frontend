import styled from "styled-components/native";
import { NavigationBarTheme } from "../../../utils/styled";
import {
  STATUS_BAR_HEIGHT,
  TOP_NAV_BAR_SIZE,
  TOP_NAV_POPOVER_OFFSET,
} from "../../../utils/dimensions";
import { NavigationButtonType } from "../components/NavigationButton/types";
import { isRightNavigationButton } from "../components/NavigationButton/utils";
import { ScreenContainerType } from "./types";

const Components = {
  NavigationHeaderContainer: styled.View<{
    screenType: ScreenContainerType;
    theme: NavigationBarTheme;
  }>`
    padding-top: ${(p) =>
      p.screenType === "fullScreen" ? STATUS_BAR_HEIGHT : 0}px;
    height: ${(p) =>
      p.screenType === "fullScreen"
        ? STATUS_BAR_HEIGHT + TOP_NAV_BAR_SIZE
        : TOP_NAV_BAR_SIZE}px;
    background-color: ${(p) => p.theme.primaryBackgroundColor};
    ${(p) =>
      p.screenType === "popover"
        ? ` 
      margin-top: ${STATUS_BAR_HEIGHT + TOP_NAV_POPOVER_OFFSET}px;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    `
        : "0px"};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  NavigationHeaderButtonContainer: styled.View``,

  TransparentButtonContainer: styled.View<{
    type: NavigationButtonType;
    screenType: ScreenContainerType;
  }>`
    position: absolute;
    background-color: transparent;
    height: ${TOP_NAV_BAR_SIZE}px;
    ${(p) => (isRightNavigationButton(p.type) ? "right: 0px;" : "left: 0px;")};
    z-index: 100;
    top: ${(p) => (p.screenType === "fullScreen" ? STATUS_BAR_HEIGHT : 0)}px;
  `,
};

export default Components;
