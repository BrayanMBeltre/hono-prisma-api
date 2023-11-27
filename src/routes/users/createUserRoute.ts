import { createRoute, z } from "@hono/zod-openapi";

import { routeErrors } from "@/utils";
import { userSchema } from "@/utils/schemas";

const bodySchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

const schema = z.object({
  data: userSchema
});

export const createUserRoute = createRoute({
  method: "post",
  path: "/api/v1/users",
  tags: ["Users"],
  request: {
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
      description: "Create user"
    },
    ...routeErrors
  }
});
