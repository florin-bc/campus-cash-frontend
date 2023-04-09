import React from "react";
import styled from "styled-components/native";

export const UIView = styled.View<{
  children?: React.ReactNode;
  backgroundColor?: string;
  justifyContent?: "flex-start" | "center" | "flex-end";
  alignItems?: "flex-start" | "center" | "flex-end";
  flex?: number;
  absoluteMargin?: number;
  width?: number | string;
  height?: number | string;
  isRow?: boolean;
}>`
  ${(p) =>
    p?.backgroundColor
      ? `background-color: ${p.backgroundColor};`
      : "background-color: transparent"};
')};
  ${(p) =>
    p?.justifyContent && p?.justifyContent?.length > 0
      ? `justify-content: ${p.justifyContent};`
      : ""};
  ${(p) =>
    p?.alignItems && p?.alignItems?.length > 0
      ? `align-items: ${p.alignItems};`
      : ""};
  ${(p) => (p.flex ? `flex: ${p.flex};` : "")};
  ${(p) =>
    p.absoluteMargin !== undefined && p.absoluteMargin !== null
      ? `
      position: absolute;
      top: ${p.absoluteMargin || 0}px;
      bottom: ${p.absoluteMargin || 0}px;
      left: ${p.absoluteMargin || 0}px;
      right: ${p.absoluteMargin || 0}px;
      `
      : ""};
  ${(p) => (p?.height ? `height: ${p?.height}px;` : "")};
  ${(p) => (p?.width ? `width: ${p?.width}px;` : "")};
  ${(p) => (p?.width ? `width: ${p?.width}px;` : "")};
  ${(p) => (p?.isRow ? "flex-direction: row;" : "")};
`;
