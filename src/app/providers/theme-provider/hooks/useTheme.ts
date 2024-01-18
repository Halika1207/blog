import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContextProvider} from "../config";

export interface UseTheme {
	theme: Theme,
	toggleAppTheme: () => void;
}

export const useTheme = (): UseTheme => {
	const {theme, setTheme} = useContext(ThemeContextProvider);
	
	const toggleAppTheme = () => {
		const changedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		setTheme(changedTheme);
		console.log(changedTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, changedTheme);
	};
	
	return {
		theme,
		toggleAppTheme,
	}
}
