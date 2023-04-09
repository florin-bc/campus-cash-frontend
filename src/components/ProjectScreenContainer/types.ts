import { NavigationHeaderProps } from "./NavigationHeader/types";
import React from "react";
import { NavigationSubtitleHeaderProps } from "./NavigationSubtitleHeader/types";

export interface ScreenContainerProps
  extends NavigationHeaderProps,
    NavigationSubtitleHeaderProps {
  children?: React.ReactNode;
  justifyContent?: "flex-start" | "center" | "flex-end";
  alignItems?: "flex-start" | "center" | "flex-end";
  backgroundColor?: string;
}
