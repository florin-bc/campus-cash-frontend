import React from "react";
import Close from "../../../../../assets/icons/icon-close.svg";
import CloseWhite from "../../../../../assets/icons/icon-close-white.svg";
import Back from "../../../../../assets/icons/icon-back.svg";
import BackBlack from "../../../../../assets/icons/icon-back-black.svg";
import SettingsWhite from "../../../../../assets/icons/icon-settings-white.svg";
import SettingsBlack from "../../../../../assets/icons/icon-settings-black.svg";
import { NavigationButtonType } from "./types";
import { isRightNavigationButton } from "./utils";
import Components from "./styled";
import { useNavigation } from "@react-navigation/native";
import { NavigationBarTheme } from "../../../../utils/styled";

const NavigationButton = ({
  type,
  onPress,
  theme,
  profileSub,
}: {
  type: NavigationButtonType;
  onPress?: () => void;
  theme?: NavigationBarTheme;
  profileSub?: string;
}) => {
  const navigation = useNavigation();

  const _onPress = () => {
    if (onPress) {
      return onPress();
    }
    if (type === "back" || type === "close") {
      navigation.goBack();
    } else {
      return null;
    }
  };

  const isRightButton = isRightNavigationButton(type);
  const isCustomButton =
    type === "selectAll" ||
    type === "deselectAll" ||
    type === "location" ||
    type === "species" ||
    type === "clearAll";

  const Container = isCustomButton
    ? Components.CustomContainer
    : Components.IconsContainer;

  return (
    //  @ts-ignore
    <Container
      isRightButton={isRightButton}
      onPress={_onPress}
      disabled={type === "species"}
    >
      {profileSub ? (
        <Components.Profile.Wrapper>
          <Components.Profile.Text>{profileSub}</Components.Profile.Text>
        </Components.Profile.Wrapper>
      ) : type === "close" ? (
        theme?.isLight ? (
          <CloseWhite />
        ) : (
          <Close />
        )
      ) : type === "back" ? (
        theme?.isLight ? (
          <Back />
        ) : (
          <BackBlack />
        )
      ) : type === "settings" ? (
        theme?.isLight ? (
          <SettingsWhite />
        ) : (
          <SettingsBlack />
        )
      ) : null}
    </Container>
  );
};

export default NavigationButton;
