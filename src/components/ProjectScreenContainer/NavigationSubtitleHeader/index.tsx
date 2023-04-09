import React from 'react';
import { Components } from './styled';
import { NavigationSubtitleHeaderProps } from './types';

const NavigationSubtitleHeader = ({ subtitle, theme, isItalic }: NavigationSubtitleHeaderProps) => {
  return (
    <Components.Container theme={theme}>
      <Components.Subtitle theme={theme} isItalic={isItalic}>
        {subtitle}
      </Components.Subtitle>
    </Components.Container>
  );
};

export default NavigationSubtitleHeader;
