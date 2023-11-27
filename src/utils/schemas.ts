import { z } from "@hono/zod-openapi";

export const userSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const metaSchema = z.object({
  count: z.number()
});
