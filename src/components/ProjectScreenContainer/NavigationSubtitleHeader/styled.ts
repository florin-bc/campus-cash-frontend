import styled from "styled-components/native";
import { AppCSS, NavigationBarTheme } from "../../../utils/styled";

export const Components = {
  Container: styled.View<{ theme: NavigationBarTheme }>`
    background-color: ${(p) => p.theme.primaryBackgroundColor};
    align-items: center;
    padding-bottom: 12px;
    margin-top: -12px;
  `,

  Subtitle: styled.Text<{ theme: NavigationBarTheme; isItalic: boolean }>`
    ${(p) =>
      p.isItalic
        ? AppCSS.navigationBar.fonts.subtitleItalic
        : AppCSS.navigationBar.fonts.subtitle};
    color: ${(p) => p.theme.primaryForegroundColor};
  `,
};
