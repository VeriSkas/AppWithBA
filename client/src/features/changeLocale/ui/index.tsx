import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../shared/ui/Button';
import { useLocal } from '../lib/useLocal';

export const LocalizeSwitcher: FC<{}> = () => {
  const toggleLocal = useLocal();
  const { t } = useTranslation();

  return (
    <Button onClick={toggleLocal} tooltip={t('Tooltip.changeLocal') ?? ''}>
      &#35821;
    </Button>
  );
};
