import React from 'react';
import {classNames} from "@shared/helpers";
import {Link} from "react-router-dom";
import styles from './NavBar.module.scss';
import {AppLinkTheme, LinkApp} from "@shared/components";
import {Theme} from "../../../app/providers";

export interface NavBarProps {
	className?: string;
	path?: string;
	linkTitle?: string;
}

export const NavBar = ({className}: NavBarProps) => {
	return (
		<div className={classNames(styles.navBar, {}, [className])}>
			<LinkApp theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>
				Main
			</LinkApp>
			<LinkApp theme={AppLinkTheme.SECONDARY} to={'/about'}>
				About
			</LinkApp>
		</div>
	);
};
