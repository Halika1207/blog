import {classNames} from "@shared/helpers";
import styles from './Button.module.scss';
import {ButtonHTMLAttributes} from "react";

export enum ButtonTheme {
	primary = 'primary',
	secondary = 'secondary',
	tertiary = "tertiary",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const {
		className,
		theme,
		children,
		...otherProps
	} = props;
	
	const themeButton = theme || ButtonTheme.primary;
	
	return (
		<button
			className={classNames(styles.button, {}, [className, styles[themeButton]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
