import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./app/App";
import {ThemeContext} from "./app/providers/theme-provider/ui/ThemeContext";

import "@shared/config/i18n/i18n";

render(
	<BrowserRouter>
		<ThemeContext>
			<App/>
		</ThemeContext>
	</BrowserRouter>,
	document.getElementById('root'),
)
