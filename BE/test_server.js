const express = require("express");
const app = express();
const PORT = 8000;

// "/" 경로에 대한 GET 요청 처리
app.get("/api", (req, res) => {
  res.send("hello teo-sprint-17-9team haha");
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
