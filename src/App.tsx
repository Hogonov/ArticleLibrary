import React, {Suspense} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Изменить тему, сейчас {theme}</button>
            <Link to={'/'}>Главная </Link>
            <Link to={'/about'}> О сайте</Link>
            <Suspense fallback={'...Loading'}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;