const swaggerUi = require("swagger-ui-express");
const config = require("./config");
const { SwaggerTheme, SwaggerThemeNameEnum } = require("swagger-themes");

const theme = new SwaggerTheme();
const inUrl = "Please input URL!";
const inQuery = "Please input Query!";

const options = {
  customSiteTitle: config.options.webName,
  customfavIcon: config.options.favicon,
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js",
  ],
  customCssUrl: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css",
  ],
  customCss: `${theme.getBuffer(SwaggerThemeNameEnum.DARK)}.topbar { display: none; }`,
  swaggerOptions: {
    displayRequestDuration: true,
  },
};

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: config.options.name,
    description: config.options.description,
    version: "1.0.0",
    "x-logo": {
      url: config.options.favicon,
      altText: config.options.name,
    },
  },
  servers: [
    {
      url: config.host.BASE_URL,
    },
  ],
  tags: [
    {
      name: "AI",
      description:
        "API endpoints for artificial intelligence content from various platforms.",
    },
    {
      name: "Cek Resi",
      description:
        "API endpoints for check receipts content from various platforms.",
    },
    // {
    //   name: "Tools",
    //   description: "API endpoints for content tools from multiple platforms.",
    // },
  ],
  paths: {
    "/api/ai/luminai": {
      get: {
        tags: ["AI"],
        summary: "Chat with Lumin AI",
        parameters: [
          {
            in: "query",
            name: "query",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
          {
            in: "username",
            name: "username",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example: "Hello! How can I help you today?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/gpt4": {
      get: {
        tags: ["AI"],
        summary: "Chat with GPT4",
        parameters: [
          {
            in: "system",
            name: "system",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
          {
            in: "assistant",
            name: "assistant",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
          {
            in: "prompt",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/leptonai": {
      get: {
        tags: ["AI"],
        summary: "Chat with LeptonAi",
        parameters: [
          {
            in: "prompt",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/letmegpt": {
      get: {
        tags: ["AI"],
        summary: "Chat with LetmeGPT",
        parameters: [
          {
            in: "prompt",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/thinkany": {
      get: {
        tags: ["AI"],
        summary: "Chat with Thinkany",
        parameters: [
          {
            in: "prompt",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/isouchat": {
      get: {
        tags: ["AI"],
        summary: "Chat with IsouChat",
        parameters: [
          {
            in: "prompt",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/yousearch": {
      get: {
        tags: ["AI"],
        summary: "Chat with YouSearch",
        parameters: [
          {
            in: "prompt",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/aoyo": {
      get: {
        tags: ["AI"],
        summary: "Chat with Aoyo",
        parameters: [
          {
            in: "prompt",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/llama3": {
      get: {
        tags: ["AI"],
        summary: "Chat with Llama3",
        parameters: [
          {
            in: "prompt",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/gpt4o": {
      get: {
        tags: ["AI"],
        summary: "Chat with GPT4o",
        parameters: [
          {
            in: "prompt",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    /** "/api/cekresi/jnt": {
      get: {
        tags: ["Cek Resi"],
        summary: "Check JNT Receipt",
        parameters: [
          {
            in: "query",
            name: "query",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }, **/
  },
  "x-request-time": new Date().toISOString(),
};

module.exports = { swaggerDocument, options };
