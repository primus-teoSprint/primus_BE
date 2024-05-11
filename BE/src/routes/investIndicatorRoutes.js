const express = require("express");
const router = express.Router();
const { createTheory } = require("../controllers/investIndicatorController");

/**
 * @swagger
 * /api/investIndicator:
 *   post:
 *     summary: 새로운 적극적 투자 지표 데이터를 생성합니다.
 *     tags: [Investment Indicators API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               totalInput:
 *                 type: number
 *                 description: 전체 이용자 수
 *               id:
 *                 type: string
 *                 description: 선택한 항목 id
 *               theorySet:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: 선택한 항목의 이름
 *                   score:
 *                     type: number
 *                     description: 선택한 항목의 점수
 *                   people:
 *                     type: number
 *                     description: 선택한 항목의 사람 수
 *               result:
 *                 type: number
 *                 description: 총 결과값
 *     responses:
 *       200:
 *         description: 성공적으로 생성되었습니다.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvestIndicator'
 *       500:
 *         description: 서버 오류
 *
 * components:
 *   schemas:
 *     InvestIndicator:
 *       type: object
 *       properties:
 *         indicatorName:
 *           type: string
 *           description: 지표의 이름
 *         indicatorValue:
 *           type: number
 *           description: 지표의 값
 *         description:
 *           type: string
 *           description: 지표에 대한 설명
 */
router.post("/", createTheory);

module.exports = router;
