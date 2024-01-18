import {RouteProps} from "react-router-dom";
import {lazy} from "react";

// export const AboutPage = (lazy(() => import('../../../../pages/about-page/About')));
export const AboutPage = (lazy(() => new Promise(resolve => {
	// @ts-ignore
	setTimeout(() => resolve(import('../../../../pages/about-page/About')), 1500)
})));
// export const MainPage = (lazy(() => import('../../../../pages/main-page/Main')));
export const MainPage = (lazy(() => new Promise(resolve => {
	// @ts-ignore
	setTimeout(() => resolve(import('../../../../pages/main-page/Main')), 1500)
})));

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
};

export const ROUTER_PATHS: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about'
};

export type RouterConfigPaths = Record<AppRoutes, RouteProps>;
export const ROUTER_CONFIG: RouterConfigPaths = {
	[AppRoutes.ABOUT]: {
		element: <AboutPage/>,
		path: ROUTER_PATHS.about,
	},
	[AppRoutes.MAIN]: {
		element: <MainPage/>,
		path: ROUTER_PATHS.main,
	}
};
