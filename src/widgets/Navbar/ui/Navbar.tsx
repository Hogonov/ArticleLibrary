import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string,

}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink
                    to="/"
                    className={classes.mainLink}
                    theme={AppLinkTheme.INVERTED}
                >
                    Главная
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.INVERTED}>О сайте</AppLink>
            </div>
        </div>
    );
};
