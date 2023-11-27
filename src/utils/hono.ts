import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";

import { handlePrismaErrors } from "./prisma";

export const handleHonoErrors = (err: Error, c: Context) => {
  if (err instanceof HTTPException) {
    return c.json({ message: err.message }, { status: err.status });
  }

  if (err instanceof PrismaClientKnownRequestError) {
    const prismaError = handlePrismaErrors(err);

    if (prismaError) {
      return c.json(
        { message: prismaError.message },
        { status: prismaError.status }
      );
    }
  }

  return c.json({ message: err.message }, { status: 500 });
};
