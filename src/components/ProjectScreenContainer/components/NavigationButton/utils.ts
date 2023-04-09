import { NavigationButtonType } from './types';

export const isRightNavigationButton = (type: NavigationButtonType) => {
  return (
    type === 'selectAll' ||
    type === 'deselectAll' ||
    type === 'save' ||
    type === 'unsave' ||
    type === 'clearAll' ||
    type === 'location' ||
    type === 'species' ||
    type === 'close' ||
    type === 'info'
  );
};
