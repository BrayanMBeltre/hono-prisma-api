import { createRoute, z } from "@hono/zod-openapi";

import { routeErrors } from "@/utils";
import { userSchema } from "@/utils/schemas";

const paramsSchema = z.object({
  id: z.string()
});

const bodySchema = userSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true
  })
  .partial();

const schema = z.object({
  data: userSchema
});

export const updateUserRoute = createRoute({
  method: "put",
  path: "/api/v1/users/{id}",
  tags: ["Users"],
  request: {
    params: paramsSchema,
    body: {
      content: {
        "application/json": {
          schema: bodySchema
        }
      }
    }
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: schema
        }
      },
      description: "Update user"
    },
    ...routeErrors
  }
});
