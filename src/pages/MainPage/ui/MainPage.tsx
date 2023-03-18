import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonThrowError } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <ButtonThrowError />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
