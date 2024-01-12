import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation('translation');
    return (
        <Page className={
            classNames(
                cls.NotFoundPage,
                {},
                [],
            )
        }
        >
            {t('Страница не найдена')}
        </Page>
    );
};

export default NotFoundPage;
