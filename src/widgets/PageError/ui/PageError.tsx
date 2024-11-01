import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла какая-то ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
