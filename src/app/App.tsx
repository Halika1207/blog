import React, {Suspense} from 'react';
import {useTheme} from "./providers/theme-provider";
import './styles/index.scss';
import {RouterProvider} from "./providers";
import {classNames} from "@shared/helpers";
import {NavBar} from "@widgets/Navbar";
import {SideBar} from "@widgets/SideBar";



export const App = () => {
	const {theme} = useTheme();
	
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<NavBar/>
				<div className="content-page">
					<SideBar/>
					<RouterProvider/>
				</div>
			</Suspense>
		</div>
	);
};
