const axios = require("axios");
const { signInKakaoService } = require("../services/userService");

exports.signInKakao = async (req, res) => {
  try {
    // 클라이언트에서 받은 코드
    const { code } = req.body;

    // 카카오 토큰 요청에 필요한 상수들
    const grantType = "authorization_code";
    const REST_API_KEY = `${process.env.REST_API_KEY}`;
    const REDIRECT_URI = "http://primus.today/oauth/callback/kakao";

    // 카카오에 엑세스 토큰 요청
    const tokenResponse = await axios.post(
      `https://kauth.kakao.com/oauth/token`,
      `grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );

    // 카카오에서 받은 엑세스 토큰
    const { access_token } = tokenResponse.data;

    // 엑세스 토큰을 사용하여 사용자 정보 가져오기 및 시스템 내 사용자 처리
    const user = await signInKakaoService(access_token); // 수정된 부분: kakaoToken -> access_token

    res.status(200).json(user);
  } catch (error) {
    console.error(error); // 오류 로깅
    res.status(500).json({ error: error.message });
  }
};
