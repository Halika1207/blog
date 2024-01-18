import styles from './ThemeSwitcher.module.scss';
import DarkIcon from '@shared/assets/icon/theme-dark.svg'
import LightIcon from '@shared/assets/icon/theme-light.svg'
import {Button, ButtonTheme} from "@shared/components";
import {classNames} from "@shared/helpers";
import {Theme, useTheme} from "@app/providers";


export interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {theme, toggleAppTheme} = useTheme();
	
	return (
		<Button
			theme={ButtonTheme.secondary}
			className={classNames(styles.themeSwitcher, {}, [className])}
			onClick={toggleAppTheme}
		>
			{theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
		</Button>
	);
};
