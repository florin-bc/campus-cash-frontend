import styled from "styled-components/native";
import { AppCSS, NavigationBarTheme } from "../../../../utils/styled";

export const Components = {
  Container: styled.View`
    flex: 1;
    align-items: center;
    padding-horizontal: 8px;
  `,

  NavigationHeaderTitle: styled.Text<{
    theme: NavigationBarTheme;
    isItalic?: boolean;
  }>`
    color: ${(p) => p.theme.primaryForegroundColor};
    ${({ isItalic }: { isItalic: any }) =>
      isItalic
        ? `
            ${AppCSS.navigationBar.fonts.titleItalic}
          `
        : `${AppCSS.navigationBar.fonts.title}`};
  `,
};
