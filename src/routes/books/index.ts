import { OpenAPIHono } from "@hono/zod-openapi";
import { createUserRoute } from "./createUserRoute";
import { db } from "@/lib/db";
import { updateUserRoute } from "./updateUserRoute";
import { deleteUserRoute } from "./deleteUserRoute";
import { getUsersRoute } from "./getUsersRoute";
import { getUserByIdRoute } from "./getUserByIdRoute";
import { HTTPException } from "hono/http-exception";

export const boooksApp = new OpenAPIHono();

boooksApp.openapi(createUserRoute, async (c) => {
  const newUser = c.req.valid("json");

  const user = await db.user.create({
    data: newUser
  });

  return c.jsonT({
    data: user
  });
});

boooksApp.openapi(updateUserRoute, async (c) => {
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

boooksApp.openapi(deleteUserRoute, async (c) => {
  const { id } = c.req.valid("param");

  const user = await db.user.delete({
    where: { id: id }
  });

  return c.jsonT({
    data: user
  });
});

boooksApp.openapi(getUsersRoute, async (c) => {
  const users = await db.user.findMany();

  return c.jsonT({
    data: users,
    meta: {
      count: users.length
    }
  });
});

boooksApp.openapi(getUserByIdRoute, async (c) => {
  const { id } = c.req.valid("param");

  const user = await db.user.findFirst({ where: { id: id } });

  if (!user) {
    throw new HTTPException(404, { message: "User not found" });
  }

  return c.jsonT({
    data: user
  });
});
