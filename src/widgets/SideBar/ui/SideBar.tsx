import {classNames} from "@shared/helpers";
import styles from './SideBar.module.scss';
import {useState} from "react";
import {Button, ButtonTheme, ThemeSwitcher} from "@shared/components";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {LanguageSwitcher} from "@widgets/LanguageSwitcher";

export interface SideBarProps {
	className?: string;
}

export const SideBar = ({className}: SideBarProps) => {
	const {t} = useTranslation();
	
	const [isCollapsed, setIsCollapsed] = useState(false);
	
	const toggleSideBar = () => setIsCollapsed(prevState => !prevState);
	
	return (
		<div className={classNames(styles.sideBar, {[styles.collapsed]: isCollapsed}, [className])}>
			<Button theme={ButtonTheme.tertiary} onClick={toggleSideBar}>{t('Toggle_btn')}</Button>
			<div className={styles.switchers}>
				<LanguageSwitcher className={styles.lang}/>
				<ThemeSwitcher/>
			</div>
		</div>
	);
};
