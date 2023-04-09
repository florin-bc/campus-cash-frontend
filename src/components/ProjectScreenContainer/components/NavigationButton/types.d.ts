export type NavigationButtonTypeLeft = 'back' | 'close' | 'settings';

export type NavigationButtonTypeRight =
  | 'selectAll'
  | 'deselectAll'
  | 'save'
  | 'unsave'
  | 'clearAll'
  | 'location'
  | 'species'
  | 'close'
  | 'info';

export type NavigationButtonType = NavigationButtonTypeLeft | NavigationButtonTypeRight;
