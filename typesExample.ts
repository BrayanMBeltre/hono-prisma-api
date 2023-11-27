/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v1/users": {
    get: {
      responses: {
        /** @description Get users list */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"][];
              meta: {
                count: number;
              };
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
    post: {
      requestBody?: {
        content: {
          "application/json": {
            email: string;
            name: string | null;
          };
        };
      };
      responses: {
        /** @description Create user */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"];
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
  };
  "/api/v1/users/{id}": {
    get: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** @description Get user by id */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"];
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
    put: {
      parameters: {
        path: {
          id: string;
        };
      };
      requestBody?: {
        content: {
          "application/json": {
            email?: string;
            name?: string | null;
          };
        };
      };
      responses: {
        /** @description Update user */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"];
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** @description Delete user */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"];
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
  };
  "/api/v1/books": {
    get: {
      responses: {
        /** @description Get users list */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"][];
              meta: {
                count: number;
              };
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
    post: {
      requestBody?: {
        content: {
          "application/json": {
            email: string;
            name: string | null;
          };
        };
      };
      responses: {
        /** @description Create user */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"];
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
  };
  "/api/v1/books/{id}": {
    get: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** @description Get user by id */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"];
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
    put: {
      parameters: {
        path: {
          id: string;
        };
      };
      requestBody?: {
        content: {
          "application/json": {
            email?: string;
            name?: string | null;
          };
        };
      };
      responses: {
        /** @description Update user */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"];
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** @description Delete user */
        200: {
          content: {
            "application/json": {
              data: components["schemas"]["User"];
            };
          };
        };
        /** @description Error getting users */
        "on Error": {
          content: {
            "application/json": {
              message?: string;
              error: {
                issues: {
                    code: string;
                    message: string;
                    path: string;
                  }[];
              };
            };
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    User: {
      id: string;
      email: string;
      name: string | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  responses: never;
  parameters: {
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;