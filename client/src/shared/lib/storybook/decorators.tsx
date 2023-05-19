import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoryContext } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import classes from '../../../app/styles/themes/index.module.scss';
import i18n from '../../../../config/i18next/i18n';

export const withTheme = (Story: any, context: StoryContext): JSX.Element => {
  const theme = context.globals.backgrounds?.value === '#1e1e1e' ? 'dark' : 'light';

  return (
    <div className={[classes.App, classes[theme]].join(' ')}>
      <Story {...context} />
    </div>
  );
};

export const withRouter = (Story: any, context: StoryContext): JSX.Element => {
  return (
    <BrowserRouter>
      <Story {...context} />
    </BrowserRouter>
  );
};

export const withLimitWidth = (Story: any, context: StoryContext): JSX.Element => {
  return (
    <div style={{ maxWidth: 300 }}>
      <Story {...context} />
    </div>
  );
};

export const useI18next = (Story: any, context: StoryContext): JSX.Element => {
  const { locale } = context.globals;

  useEffect(() => {
    void i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
