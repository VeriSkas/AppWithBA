import React, { FC, ReactNode, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Backdrop } from '../../../shared/ui/Backdrop';
import { navLinks } from '../config/navLinks';
import { UserCard } from '../../../entities/UserCard';
import { activeUser } from '../../../shared/config/mock/mockData';
import classes from './styles.module.scss';

export const Sidebar: FC<{}> = () => {
  const { t } = useTranslation('mainPage');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links = navLinks;

  const onClose = (): void => {
    setIsOpen(false);
  };

  const openHandler = (): void => {
    setIsOpen((value) => !value);
  };

  const renderLinks = (): ReactNode =>
    links.map((link) => (
      <li key={link.label}>
        <NavLink to={link.to} onClick={onClose}>
          <span>{t(link.label)}</span>
        </NavLink>
      </li>
    ));

  return (
    <>
      <div className={isOpen ? classes.HeaderIcon : `${classes.HeaderIcon} ${classes.close}`}>
        <span onClick={openHandler}>&#9776;</span>
      </div>
      <div>
        <nav className={isOpen ? classes.SideBar : `${classes.SideBar} ${classes.close}`}>
          <div className={classes.NavHeader}></div>
          <ul className={classes.NavLinks}>{renderLinks()}</ul>
          <div className={classes.NavFooter}>
            <UserCard user={activeUser} onClose={onClose} />
          </div>
        </nav>
        {isOpen && <Backdrop onClick={onClose} />}
      </div>
    </>
  );
};
