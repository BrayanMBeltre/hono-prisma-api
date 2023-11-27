import { createRoute, z } from "@hono/zod-openapi";

import { routeErrors } from "@/utils";
import { userSchema } from "@/utils/schemas";

const paramsSchema = z.object({
  id: z.string()
});

const schema = z.object({
  data: userSchema
});

export const getUserByIdRoute = createRoute({
  method: "get",
  path: "/api/v1/books/{id}",
  tags: ["books"],
  request: {
    params: paramsSchema
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: schema
        }
      },
      description: "Get user by id"
    },
    ...routeErrors
  }
});
