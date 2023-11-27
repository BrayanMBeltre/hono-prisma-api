import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const errorMappings: Record<string, { status: number; message: string }> = {
  P2000: { status: 400, message: "Input Data is too long" },
  P2001: { status: 404, message: "Record does not exist" },
  P2002: { status: 409, message: "Reference Data already exists" }
};

export const handlePrismaErrors = (error: Error | null) => {
  if (!error) return;

  if (error instanceof PrismaClientKnownRequestError) {
    const { status, message } = errorMappings[error.code] ?? {
      status: 500,
      message: "Internal Server Error"
    };
    return { status, message };
  }
  return { status: 500, message: "Internal Server Error" };
};
