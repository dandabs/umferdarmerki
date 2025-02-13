export const api = new sst.aws.ApiGatewayV2("Api", {
	domain: $app.stage === "prod" ? "merki-api.dsk.is" : undefined,
});

api.route("GET /", {
	handler: "packages/functions/src/api.handler",
});
