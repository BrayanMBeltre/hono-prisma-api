import { z } from "@hono/zod-openapi";

/**
 * Wraps a promise in a try-catch block and returns the result or error.
 * @param promise The promise to be wrapped.
 * @returns A tuple containing the result or null, and the error or null.
 */
export const tryCatchWrapper = async <T, E = Error>(
  promise: Promise<T>
): Promise<[T | null, E | null]> => {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error as E];
  }
};

export const errorSchema = z.object({
  message: z.string().optional(),
  error: z.object({
    issues: z.array(
      z.object({
        code: z.string(),
        message: z.string(),
        path: z.string()
      })
    )
  })
});

export const routeErrors = {
  "on Error": {
    content: {
      "application/json": {
        schema: errorSchema
      }
    },
    description: "Error getting users"
  }
};
