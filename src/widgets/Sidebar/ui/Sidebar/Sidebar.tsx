import React, {FC, useState} from 'react';
import classes from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface SidebarProps {
    className?: string,

}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>Toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};