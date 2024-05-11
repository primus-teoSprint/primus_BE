const express = require("express");
const router = express.Router();
const toolDetailController = require("../controllers/toolDetailController");

/**
 * @swagger
 * /api/toolDetails:
 *   get:
 *     summary: 검증 방식 세부 정보 목록
 *     description: 각 검증 방식에 대한 세부 정보를 포함하는 목록을 반환합니다.
 *     tags: [Tool Detail API]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: false
 *         description: 페이지 번호 (페이징을 위함)
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *         required: false
 *         description: 페이지당 반환할 항목 수 (페이징을 위함)
 *       - in: query
 *         name: field
 *         schema:
 *           type: string
 *         required: false
 *         description: 정렬 기준 필드
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *         required: false
 *         description: 정렬 순서 ('ASC' 또는 'DESC')
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: false
 *         description: JSON 문자열로 된 쿼리 필터
 *     responses:
 *       200:
 *         description: 검증 방식 세부 정보를 포함하는 JSON 객체를 반환합니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     tool:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/ToolDetail'
 *                 total:
 *                   type: integer
 *                   description: 사용 가능한 검증 방식 세부 정보의 총 수
 * components:
 *   schemas:
 *     ToolDetail:
 *       type: object
 *       required:
 *         - toolImg
 *         - title
 *       properties:
 *         toolImg:
 *           type: string
 *           description: 검증 툴 이미지
 *         title:
 *           type: string
 *           description: 검증 툴 제목
 *         subTitle:
 *           type: string
 *           description: 검증 툴 서브 제목
 *         createdBy:
 *           type: string
 *           description: 검증 툴 만든 사람 이름
 *         description:
 *           type: string
 *           description: 검증 툴 짧은 설명
 *         company:
 *           type: array
 *           items:
 *             type: string
 *           description: 검증 툴을 실제 사용하고 있는 회사 이미지 로고들
 *         keyword:
 *           type: array
 *           items:
 *             type: string
 *           description: 검증 툴을 한단어로 표현한 키워드들
 *         content:
 *           type: string
 *           description: 검증 툴 개요
 *         verificationMethod:
 *           type: array
 *           items:
 *             type: string
 *           description: 검증 툴 검증 방식
 *         exampleContent:
 *           type: array
 *           items:
 *             type: string
 *           description: 실제 사용하고 있는 회사의 예시 글
 */
router.get("/", toolDetailController.getAllToolDetails);

module.exports = router;
