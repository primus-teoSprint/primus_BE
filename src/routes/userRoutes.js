const express = require("express");
const router = express.Router();
const { signInKakao } = require("../controllers/userController");

/**
 * @swagger
 * /api/auth/kakao/signin:
 *   post:
 *     summary: 카카오 로그인을 통해 유저 정보를 DB에 저장하고 사용자 토큰을 반환합니다.
 *     description: 카카오 엑세스 토큰을 사용하여 유저 정보를 조회하고, 시스템에 유저가 없을 경우 새로운 유저를 생성합니다.
 *     tags: [User API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - kakaoToken
 *             properties:
 *               kakaoToken:
 *                 type: string
 *                 description: 카카오 로그인 후 받은 임시 액세스 토큰 값
 *     responses:
 *       200:
 *         description: 로그인 성공 및 사용자 정보 반환
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: 사용자 인증을 위한 토큰
 *                 user:
 *                   type: object
 *                   properties:
 *                     kakaoId:
 *                       type: string
 *                     email:
 *                       type: string
 *                     name:
 *                       type: string
 *                     profileImage:
 *                       type: string
 *       400:
 *         description: 잘못된 요청
 *       401:
 *         description: 인증 실패
 */
router.post("/kakao/signin", signInKakao);

module.exports = router;
