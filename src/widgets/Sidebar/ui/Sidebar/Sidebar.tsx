import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,

}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={
                classNames(
                    classes.Sidebar,
                    {
                        [classes.collapsed]: collapsed,
                    },
                    [className],
                )
            }
        >
            <Button onClick={onToggle}>111</Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lang} />
            </div>
        </div>
    );
};
