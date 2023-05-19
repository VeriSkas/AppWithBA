import React, { FC } from 'react';

import userPhoto from '../../../../public/assets/images/userIcon.png';
import classes from './Avatar.module.scss';

export const Avatar: FC<{ src?: string, alt?: string }> = ({ src, alt }) => {
  return (
    <div className={classes.Avatar}>
      <img src={src ?? userPhoto} alt={alt ?? 'img'} />
    </div>
  );
};
