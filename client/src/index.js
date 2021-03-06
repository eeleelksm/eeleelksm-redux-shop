import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./utils/store.js";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Provider store={store}></Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.register();
