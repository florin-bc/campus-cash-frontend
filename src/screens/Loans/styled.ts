import styled from "styled-components/native";
import { AppCSS } from "../../utils/styled";

export const Components = {
  HeaderTitle: styled.Text`
    ${AppCSS.fonts.h1};
    color: ${AppCSS.colors.white};
    margin-left: 16px;
    margin-top: 32px;
  `,

  GreyWrapper: styled.View`
    background-color: ${AppCSS.colors.grey};
    margin-horizontal: 16px;
    margin-top: 32px;
    ${AppCSS.radiuses.big};
    padding: 16px;
  `,

  SubtitleWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,

  Subtitle: styled.Text<{ marginTop?: number }>`
    ${AppCSS.fonts.h3};
    color: ${AppCSS.colors.platinum};
    ${(p) => (p?.marginTop ? `margin-top: ${p.marginTop}px;` : "")}
  `,

  SeeMore: styled.Text`
    ${AppCSS.fonts.regular};
    color: ${AppCSS.colors.platinum};
  `,

  HorizontalWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
};

export const CardComponents = {
  Wrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  `,

  LeftSide: {
    Wrapper: styled.View`
      flex-direction: row;
      align-items: center;
    `,

    NameLettersWrapper: styled.View`
      height: 45px;
      width: 45px;
      align-items: center;
      justify-content: center;
    `,

    NameLetters: styled.Text`
      ${AppCSS.fonts.h2};
      color: ${AppCSS.colors.eerieBlack};
    `,

    TextField: {
      Wrapper: styled.View``,
      Text: styled.Text`
        ${AppCSS.fonts.regular};
        color: ${AppCSS.colors.white};
        margin-top: 4px;
      `,
    },
  },

  ActionButton: styled.TouchableOpacity`
    ${AppCSS.button.container.primary};
  `,

  ActionButtonText: styled.Text`
    ${AppCSS.button.label.primary};
  `,

  IconWrapper: styled.View`
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
  `,
};
