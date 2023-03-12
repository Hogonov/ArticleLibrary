import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation('translation');
    return (
        <div className={
            classNames(
                classes.NotFoundPage,
                {},
                [],
            )
        }
        >
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;
