const swaggerJSDoc = require("swagger-jsdoc");
// const dotenv = require("dotenv");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: `${process.env.API_URL}`,
        description: "API server",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // 파일 경로는 프로젝트에 맞게 조정
};

const swaggerSpec = swaggerJSDoc(options);
console.log(process.env.API_URL);
module.exports = swaggerSpec;
