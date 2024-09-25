import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';

// Компонента для теста
export const ButtonThrowError: FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrowError = () => {
        setError((per) => !per);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return <Button onClick={onThrowError}>{t('Выбросить ошибку')}</Button>;
};
