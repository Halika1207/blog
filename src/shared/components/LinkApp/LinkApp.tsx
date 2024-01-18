import {classNames} from "@shared/helpers";
import styles from './LinkApp.module.scss';
import {Link} from "react-router-dom";

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red',
}

export interface LinkAppProps {
	className?: string;
	theme?: AppLinkTheme;
}

//TODO: update type here
export const LinkApp = (props: any) => {
	
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;
	
	return (
		<Link
			to={to}
			className={classNames(styles.linkApp, {[styles[theme]]: true}, [className])}
			{...otherProps}
		>
			{children}
		</Link>
	);
};
