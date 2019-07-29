import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPlayer from "./MainPlayer";
import ErrorPage from "../ErrorPage";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={MainPlayer} />
			<Route exact path='/:activeVideo' component={MainPlayer} />
			<Route component={ErrorPage} />
		</Switch>
		<GlobalStyle />
	</Router>
);

export default App;
