const express = require("express");
const router = express.Router();
const toolTemplateController = require("../controllers/toolTemplateController");
const authMiddleware = require("../middleware/authMiddleware");

/**
 * @swagger
 * components:
 *   schemas:
 *     ToolTemplate:
 *       type: object
 *       required:
 *         - toolName
 *         - ideaOverview
 *         - thinkBackground
 *         - marketTheory
 *         - bigxyzTheory
 *         - smallxyzTheory
 *         - pretotypePlan
 *       properties:
 *         toolName:
 *           type: string
 *           description: 검증 툴 이름
 *         ideaOverview:
 *           type: string
 *           description: 아이디어 개요
 *         thinkBackground:
 *           type: string
 *           description: 생각하게 된 배경
 *         marketTheory:
 *           type: string
 *           description: 시장호응가설
 *         bigxyzTheory:
 *           type: string
 *           description: XYZ가설
 *         smallxyzTheory:
 *           type: string
 *           description: xyz 가설
 *         pretotypePlan:
 *           type: string
 *           description: 프리토타이핑 계획
 *
 * /api/toolTemplates:
 *   post:
 *     summary: 검증 툴 템플릿 생성
 *     description: 각 검증 툴에 대한 템플릿을 생성합니다.
 *     tags: [Tool Template API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ToolTemplate'
 *     responses:
 *       201:
 *         description: 툴 템플릿 생성 성공
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToolTemplate'
 *       400:
 *         description: 입력 데이터 오류
 */
router.post("/", authMiddleware, toolTemplateController.createTemplate);

module.exports = router;
