import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

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
    return (
        <Button onClick={onThrowError}>
            {t('Выбросить ошибку')}
        </Button>
    );
};
