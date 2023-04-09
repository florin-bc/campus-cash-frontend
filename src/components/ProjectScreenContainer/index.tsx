import React from "react";
import { AppCSS } from "../../utils/styled";
import { UIView } from "../../utils/styled/styled";
import NavigationHeader from "./NavigationHeader";
import { ScreenContainerProps } from "./types";
import NavigationSubtitleHeader from "./NavigationSubtitleHeader";

const ProjectScreenContainer = (props: ScreenContainerProps) => {
  const screenType = props.screenType ? props.screenType : "fullScreen";
  const processed: ScreenContainerProps = {
    type: "navigation",
    screenType,
    backgroundColor: AppCSS.colors.eerieBlack,
    theme: AppCSS.navigationBar.themes.white,
    isTransparent: false,
    isItalic: props.isItalic ? props.isItalic : false,
    ...props,
  };
  return (
    <>
      {processed.type === "navigation" && <NavigationHeader {...processed} />}
      {processed.type === "navigation" && props.subtitle ? (
        <NavigationSubtitleHeader
          subtitle={props.subtitle}
          theme={processed.theme}
          isItalic={processed.isItalic}
        />
      ) : null}
      <UIView
        flex={1}
        justifyContent={props.justifyContent}
        alignItems={props.alignItems}
        backgroundColor={processed.backgroundColor}
      >
        {props.children}
      </UIView>
    </>
  );
};

export default ProjectScreenContainer;
