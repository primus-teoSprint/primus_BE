const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const userRoutes = require("./routes/userRoutes");
const toolDetailRoutes = require("./routes/toolDetailRoutes");
const toolTemplateRoutes = require("./routes/toolTemplateRoutes");
const investIndicatorRoutes = require("./routes/investIndicatorRoutes");

dotenv.config({ path: path.join(__dirname, "../.env.local") });
const swaggerSpec = require("./config/swagger");

const app = express();

// MongoDB connection
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:27017/STLab`,
  {
    // 다른 MongoDB 연결 옵션들을 필요에 따라 추가
  }
);

console.log("Connected to MongoDB :)");

// CORS 설정(cors 미들웨어를 이용해서 일일히 헤더 이름을 타이핑 안해도 된다.)
app.use(
  cors({
    origin: [
      process.env.API_URL,
      process.env.LOCAL_URL,
      process.env.ORIGIN_URL,
      process.env.BASE_URL,
    ], // cors 미들웨어는 'url' 대신 'origin'을 사용
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTION",
    preflightContinue: false,
    exposedHeaders: ["Content-Range"],
    optionsSuccessStatus: 200,
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  })
);

// Middleware
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tool Details API",
      version: "1.0.0",
      description: "API for managing tool details",
    },
  },
  apis: ["./routes/*.js"], // files containing annotations as above
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api-dev/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use routes
app.use(`${process.env.API_NAME}/auth`, userRoutes);
app.use(`${process.env.API_NAME}/toolDetails`, toolDetailRoutes);
app.use(`${process.env.API_NAME}/toolTemplates`, toolTemplateRoutes);
app.use(`${process.env.API_NAME}/investIndicator`, investIndicatorRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
