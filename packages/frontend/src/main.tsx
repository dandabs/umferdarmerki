import { Amplify, API, Auth } from "aws-amplify";
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>
);
