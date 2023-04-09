import React from "react";
import { Components } from "./styled";
import { UIView } from "../../../../utils/styled/styled";
import { NavigationBarTheme } from "../../../../utils/styled";

const NavigationTitle = ({
  title,
  theme,
  isItalic,
}: {
  title?: string;
  theme?: NavigationBarTheme;
  isItalic?: boolean;
}) => {
  return (
    <Components.Container>
      {title && title?.length > 0 ? (
        <Components.NavigationHeaderTitle
          numberOfLines={1}
          theme={theme}
          isItalic={isItalic}
        >
          {title}
        </Components.NavigationHeaderTitle>
      ) : (
        <UIView flex={1} height={0} />
      )}
    </Components.Container>
  );
};

export default NavigationTitle;
