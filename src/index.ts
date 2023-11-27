// Validate envs
import "@/utils/env";

import { OpenAPIHono } from "@hono/zod-openapi";

import { swaggerUI } from "@hono/swagger-ui";

import { db } from "./lib/db";
import { getUsersRoute } from "./routes/getUsersRoute";
import { getUserByIdRoute } from "./routes/getUserByIdRoute";
import { createUserRoute } from "./routes/createUserRoute";
import { HTTPException } from "hono/http-exception";
import { handleHonoErrors } from "./utils/hono";
import { updateUserRoute } from "./routes/updateUserRoute";
import { deleteUserRoute } from "./routes/deleteUserRoute";

const app = new OpenAPIHono();

app.onError(handleHonoErrors);

app.openapi(createUserRoute, async (c) => {
  const newUser = c.req.valid("json");

  const user = await db.user.create({
    data: newUser
  });

  return c.jsonT({
    data: user
  });
});

app.openapi(updateUserRoute, async (c) => {
  const { id } = c.req.valid("param");
  const updatedUser = c.req.valid("json");

  const user = await db.user.update({
    where: { id: id },
    data: updatedUser
  });

  return c.jsonT({
    data: user
  });
});

app.openapi(deleteUserRoute, async (c) => {
  const { id } = c.req.valid("param");

  const user = await db.user.delete({
    where: { id: id }
  });

  return c.jsonT({
    data: user
  });
});

app.openapi(getUsersRoute, async (c) => {
  const users = await db.user.findMany();

  return c.jsonT({
    data: users,
    meta: {
      count: users.length
    }
  });
});

app.openapi(getUserByIdRoute, async (c) => {
  const { id } = c.req.valid("param");

  const user = await db.user.findFirst({ where: { id: id } });

  if (!user) {
    throw new HTTPException(404, { message: "User not found" });
  }

  return c.jsonT({
    data: user
  });
});

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
