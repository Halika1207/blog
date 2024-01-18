import React, {FC, ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContextProps, ThemeContextProvider} from "../../theme-provider";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
export const ThemeContext: FC = ({children}: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	
	const defaultThemeProps: ThemeContextProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme])
	
	return (
		<ThemeContextProvider.Provider value={defaultThemeProps}>
			{children}
		</ThemeContextProvider.Provider>
	);
};
