import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Alex\'s App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath[AppRoutes.ARTICLE_CREATE]}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <div className={cls.links}>

                    <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>{t('Выйти')}</Button>
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>{t('Войти')}</Button>
            </div>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
