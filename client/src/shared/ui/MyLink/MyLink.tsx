import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { MyLinkProps } from './interface';
import classes from './MyLink.module.scss';

export const MyLink: FC<MyLinkProps> = ({ to, text }) => {
  return (
    <Link to={to} className={classes.MyLink}>
      {text}
    </Link>
  );
};
