import React, {Suspense} from 'react';
import {ROUTER_CONFIG} from "../config";
import {Route, Routes} from "react-router-dom";


export const RouterProvider = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(ROUTER_CONFIG).map(({element, path}) => (
					<Route
						key={path}
						path={path}
						element={(
							<div className="page-wrapper">
								{element}
							</div>
						)}
					/>
				))}
			</Routes>
		</Suspense>
	);
};
