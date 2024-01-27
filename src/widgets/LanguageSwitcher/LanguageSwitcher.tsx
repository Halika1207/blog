import {classNames} from "@shared/helpers";
import styles from './LanguageSwitcher.module.scss';
import {Button, ButtonTheme} from "@shared/components";
import i18n from "i18next";
import {useTranslation} from "react-i18next";

export interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
	const {t} = useTranslation();
	
	const toggleLanguage = () => i18n.resolvedLanguage === 'ua' ? i18n.changeLanguage('en') : i18n.changeLanguage('ua');
	
	return (
		<Button
			theme={ButtonTheme.tertiary}
			onClick={toggleLanguage}
			className={classNames(styles.languageSwitcher, {}, [className])}
		>
			{t('Change_lng')}
		</Button>
	);
};
