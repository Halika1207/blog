import {classNames} from "@shared/helpers";
import styles from './SideBar.module.scss';
import {useState} from "react";
import {Button, ButtonTheme, ThemeSwitcher} from "@shared/components";

export interface SideBarProps {
	className?: string;
}

export const SideBar = ({className}: SideBarProps) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	
	const toggleSideBar = () => setIsCollapsed(prevState => !prevState);
	console.log(isCollapsed)
	return (
		<div className={classNames(styles.sideBar, {[styles.collapsed]: isCollapsed}, [className])}>
			<Button theme={ButtonTheme.tertiary} onClick={toggleSideBar}>Toggle</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher/>
			</div>
		</div>
	);
};
