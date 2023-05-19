import React from 'react';

import { ThemeContext, useTheme } from '../../shared/lib/theme';

export const withTheme = (component: () => React.ReactNode) => () => {
  const [theme, setTheme] = useTheme();

  return <ThemeContext.Provider value={[theme, setTheme]}>{component()}</ThemeContext.Provider>;
};
