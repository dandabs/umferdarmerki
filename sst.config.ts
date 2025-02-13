/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "umferdamerki",
			removal: input?.stage === "prod" ? "retain" : "remove",
			home: "aws",
		};
	},
	async run() {
		await import("./infra/api");
		await import("./infra/web");

		return {

		};
	},
});
