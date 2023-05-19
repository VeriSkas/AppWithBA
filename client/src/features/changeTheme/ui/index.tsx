import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useThemeContext } from '../../../shared/lib/theme';
import { Button } from '../../../shared/ui/Button';

export const ThemeSwitcher: FC<{}> = () => {
  const [, toggleTheme] = useThemeContext();
  const { t } = useTranslation();

  return (
    <Button testId="changeThemeBtn" onClick={toggleTheme} tooltip={t('Tooltip.changeTheme') ?? ''}>
      &#128262;
    </Button>
  );
};
