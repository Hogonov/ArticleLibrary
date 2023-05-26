import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string,

}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.links}>
                /
            </div>
        </div>
    );
};
