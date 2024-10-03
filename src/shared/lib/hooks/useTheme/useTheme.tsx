import { useContext } from 'react';

import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

const ThemeStrategy: Record<Theme, Theme> = {
    [Theme.DARK]: Theme.LIGHT,
    [Theme.LIGHT]: Theme.PURPLE_DARK,
    [Theme.PURPLE_DARK]: Theme.DARK,
};

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        const newTheme = theme ? ThemeStrategy[theme] : Theme.LIGHT;
        setTheme?.(newTheme);
        saveAction?.(newTheme);
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
