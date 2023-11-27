import { createRoute, z } from "@hono/zod-openapi";

import { routeErrors } from "@/utils";
import { metaSchema, userSchema } from "@/utils/schemas";

const schema = z.object({
  data: z.array(userSchema),
  meta: metaSchema
});

export const getUsersRoute = createRoute({
  method: "get",
  path: "/api/v1/books",
  tags: ["books"],
  responses: {
    200: {
      content: {
        "application/json": {
          schema: schema
        }
      },
      description: "Get users list"
    },
    ...routeErrors
  }
});
