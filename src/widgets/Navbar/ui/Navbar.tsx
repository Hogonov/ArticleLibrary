import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
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
                <AppLink
                    to="/"
                    className={classes.mainLink}
                    theme={AppLinkTheme.INVERTED}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.INVERTED}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};