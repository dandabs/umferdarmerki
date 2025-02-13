import { api } from "./api";

const region = aws.getRegionOutput().name;

export const frontend = new sst.aws.StaticSite("Frontend", {
	path: "packages/frontend",
	build: {
		output: "dist",
		command: "npm run build",
	},
	domain:
		$app.stage === "prod"
			? {
					name: "merki.dsk.is",
				}
			: undefined,
	environment: {
		VITE_REGION: region,
		VITE_API_URL: api.url,
	},
});
