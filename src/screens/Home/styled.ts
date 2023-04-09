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

  Subtitle: styled.Text<{ marginTop?: number }>`
    ${AppCSS.fonts.h3};
    color: ${AppCSS.colors.platinum};
    ${(p) => (p?.marginTop ? `margin-top: ${p.marginTop}px;` : "")}
  `,

  Balance: styled.Text`
    ${AppCSS.fonts.h2Bold};
    color: ${AppCSS.colors.white};
    margin-top: 8px;
  `,

  ButtonsWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  `,

  ActionButton: styled.TouchableOpacity`
    ${AppCSS.button.container.primary};
    ${AppCSS.button.label.primary};
  `,

  IconWrapper: styled.View`
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
  `,

  SeeMore: {
    Wrapper: styled.TouchableOpacity`
      padding-horizontal: 16px;
    `,
    Text: styled.Text`
      ${AppCSS.fonts.h4Medium};
      color: ${AppCSS.colors.platinum};
    `,
  },
};

export const CardComponents = {
  Wrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,

  LeftSide: {
    Wrapper: styled.View`
      flex-direction: row;
      align-items: center;
    `,

    IconWrapper: styled.View`
      height: 42px;
      width: 42px;
      align-items: center;
      justify-content: center;
    `,

    TextField: {
      Wrapper: styled.View``,
      Title: styled.Text`
        ${AppCSS.fonts.h4Bold};
        color: ${AppCSS.colors.white};
      `,
      Date: styled.Text`
        ${AppCSS.fonts.small};
        color: ${AppCSS.colors.white};
        margin-top: 4px;
      `,
    },
  },

  RightSide: {
    Wrapper: styled.View``,

    Amount: styled.Text`
      ${AppCSS.fonts.h4Bold};
      color: ${AppCSS.colors.white};
    `,

    Cashback: styled.Text`
      ${AppCSS.fonts.small};
      color: ${AppCSS.colors.white};
      margin-top: 4px;
    `,
  },
};
