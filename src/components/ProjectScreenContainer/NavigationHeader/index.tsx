import React from "react";
import { TOP_NAV_BUTTON_MAX_WIDTH } from "../../../utils/dimensions";
import { UIView } from "../../../utils/styled/styled";
import NavigationButton from "../components/NavigationButton";
import Components from "./styled";
import { NavigationHeaderProps, ScreenContainerType } from "./types";
import NavigationTitle from "../components/NavigationTitle";
import {
  NavigationButtonTypeLeft,
  NavigationButtonTypeRight,
} from "../components/NavigationButton/types";
import { NavigationBarTheme } from "../../../utils/styled";

interface NavigationBarTransparentProps {
  leftButton?: NavigationButtonTypeLeft;
  rightButton?: NavigationButtonTypeRight;
  onLeftTap?: () => void;
  onRightTap?: () => void;
  screenType: ScreenContainerType;
  theme?: NavigationBarTheme;
  profileSub?: string;
}

interface NavigationBarProps extends NavigationBarTransparentProps {
  title?: string;
  isItalic?: boolean;
}

const NavigationSolidHeader = ({
  title,
  leftButton,
  rightButton,
  onLeftTap,
  onRightTap,
  screenType,
  theme,
  isItalic,
  profileSub,
}: NavigationBarProps) => {
  return (
    <Components.NavigationHeaderContainer screenType={screenType} theme={theme}>
      {leftButton || profileSub ? (
        <Components.NavigationHeaderButtonContainer>
          <NavigationButton
            type={leftButton}
            onPress={onLeftTap}
            theme={theme}
            profileSub={profileSub}
          />
        </Components.NavigationHeaderButtonContainer>
      ) : (
        <UIView width={TOP_NAV_BUTTON_MAX_WIDTH} height={0} />
      )}
      <NavigationTitle title={title} theme={theme} isItalic={isItalic} />
      {rightButton ? (
        <Components.NavigationHeaderButtonContainer>
          <NavigationButton
            type={rightButton}
            onPress={onRightTap}
            theme={theme}
          />
        </Components.NavigationHeaderButtonContainer>
      ) : (
        <UIView width={TOP_NAV_BUTTON_MAX_WIDTH} height={0} />
      )}
    </Components.NavigationHeaderContainer>
  );
};

const NavigationTransparentHeader = ({
  leftButton,
  rightButton,
  onLeftTap,
  onRightTap,
  screenType,
  theme,
  profileSub,
}: NavigationBarTransparentProps) => {
  return (
    <>
      {leftButton ? (
        <Components.TransparentButtonContainer
          type={leftButton}
          screenType={screenType}
        >
          <UIView flex={1} justifyContent={"center"}>
            <NavigationButton
              type={leftButton}
              onPress={onLeftTap}
              theme={theme}
            />
          </UIView>
        </Components.TransparentButtonContainer>
      ) : null}
      {rightButton ? (
        <Components.TransparentButtonContainer
          type={rightButton}
          screenType={screenType}
        >
          <UIView flex={1} justifyContent={"center"}>
            <NavigationButton
              type={rightButton}
              onPress={onRightTap}
              theme={theme}
            />
          </UIView>
        </Components.TransparentButtonContainer>
      ) : null}
    </>
  );
};

const NavigationHeader = ({
  title,
  leftButton,
  rightButton,
  onLeftTap,
  onRightTap,
  screenType,
  theme,
  isTransparent,
  titleIsItalic,
  profileSub,
}: NavigationHeaderProps) => {
  const _screenType = screenType ? screenType : "fullScreen";

  return (
    <>
      {isTransparent ? (
        <NavigationTransparentHeader
          leftButton={leftButton}
          rightButton={rightButton}
          onLeftTap={onLeftTap}
          onRightTap={onRightTap}
          screenType={_screenType}
          theme={theme}
          profileSub={profileSub}
        />
      ) : (
        <NavigationSolidHeader
          title={title}
          leftButton={leftButton}
          rightButton={rightButton}
          onLeftTap={onLeftTap}
          onRightTap={onRightTap}
          screenType={_screenType}
          theme={theme}
          isItalic={titleIsItalic}
          profileSub={profileSub}
        />
      )}
    </>
  );
};
export default NavigationHeader;
