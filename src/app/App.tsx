import React from 'react';
import {useTheme} from "./providers/theme-provider";
import './styles/index.scss';
import {RouterProvider} from "./providers";
import {classNames} from "@shared/helpers";
import {NavBar} from "@widgets/Navbar";
import {SideBar} from "@widgets/SideBar";


export const App = () => {
	const {theme, toggleAppTheme} = useTheme();
	
	return (
		<div className={classNames('app', {}, [theme])}>
			<NavBar/>
			<div className="content-page">
				<SideBar/>
				<RouterProvider/>
			</div>
		</div>
	);
};
