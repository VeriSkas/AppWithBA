import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PATH } from '../../config/constants';
import logo from '../../../../public/assets/images/logo.png';
import classes from './Logo.module.scss';

export const Logo: FC<{ text?: string, img?: string, alt?: string }> = ({ text, img, alt }) => {
  const { t } = useTranslation();

  return (
    <Link to={PATH.login} className={classes.Logo}>
      <h3 className={classes.LogoText}>{t(text ?? 'TextContent.logo')}</h3>
      <div className={classes.LogoImg}>
        <img src={img ?? logo} alt={alt ?? 'Logo'} />
      </div>
    </Link>
  );
};
