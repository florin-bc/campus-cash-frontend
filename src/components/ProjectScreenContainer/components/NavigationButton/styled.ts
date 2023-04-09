import { AppCSS } from "../../../../utils/styled";
import styled from "styled-components/native";
import {
  TOP_NAV_BAR_SIZE,
  TOP_NAV_BUTTON_MAX_WIDTH,
  TOP_NAV_BUTTON_PADDING,
} from "../../../../utils/dimensions";

const CustomContainer = styled.TouchableOpacity<{ isRightButton: boolean }>`
  height: ${TOP_NAV_BAR_SIZE}px;
  justify-content: center;
  align-items: ${(p) => (p.isRightButton ? "flex-end" : "flex-start")};
  ${(p) =>
    p.isRightButton
      ? `padding-right: ${TOP_NAV_BUTTON_PADDING}px;`
      : `padding-left: ${TOP_NAV_BUTTON_PADDING}px;`};
`;

const Components = {
  CustomContainer,

  IconsContainer: styled(CustomContainer)`
    width: ${TOP_NAV_BUTTON_MAX_WIDTH}px;
  `,

  ButtonLabelBig: styled.Text<{ isBlack?: boolean }>`
    ${AppCSS.navigationBar.fonts.title};
    color: ${(p) => (p.isBlack ? AppCSS.colors.darkBlue : AppCSS.colors.white)};
  `,

  LocationsLegendText: styled.Text`
    ${AppCSS.fonts.regular};
    color: ${AppCSS.colors.white};
    margin-left: 8px;
  `,
};

export default Components;
