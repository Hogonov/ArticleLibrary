import { useContext } from 'react';

import {
    ThemeContext,
} from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

const ThemeStrategy: Record<Theme, Theme> = {
    [Theme.DARK]: Theme.LIGHT,
    [Theme.LIGHT]: Theme.PURPLE_DARK,
    [Theme.PURPLE_DARK]: Theme.DARK,
};

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme ? ThemeStrategy[theme] : Theme.LIGHT;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
