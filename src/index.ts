// Validate envs
import "@/utils/env";

import { OpenAPIHono } from "@hono/zod-openapi";

import { swaggerUI } from "@hono/swagger-ui";

import { handleHonoErrors } from "./utils/hono";
import { usersApp } from "./routes/users";

const app = new OpenAPIHono();

app.onError(handleHonoErrors);

app.route("/", usersApp);

app.openAPIRegistry.registerComponent("securitySchemes", "Authorization", {
  type: "apiKey",
  name: "Authorization",
  in: "header"
});

app.doc("/api/openapi.json", {
  info: {
    title: "Odontoffice MINIO API",
    version: "v1"
  },
  openapi: "3.1.0"
});

app.get("/api/documentation", swaggerUI({ url: "/api/openapi.json" }));

export default app;
