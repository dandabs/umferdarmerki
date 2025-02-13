import { Box, CssBaseline, CssVarsProvider, extendTheme } from "@mui/joy";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./containers/Home";

function App() {
	const theme = extendTheme({
		fontFamily: {
			display: "Transport New",
			body: "Transport New",
		},
	});

	return (
		(
			<div className="App">
					<title>Umferðarmerki Íslands</title>
					<CssVarsProvider
						disableTransitionOnChange
						theme={theme}>
						<CssBaseline />
						<Box
								sx={{
									minHeight: "100vh",
								}}>
								<main>
									<Home />
								</main>
							</Box>
					</CssVarsProvider>
			</div>
		)
	);
}

export default App;
