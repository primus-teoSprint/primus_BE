const User = require("../models/user");
const axios = require("axios");
const jwt = require("jsonwebtoken");

exports.signInKakaoService = async (kakaoToken) => {
  const { data } = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
    },
  });

  const {
    id: kakaoId,
    properties: { nickname: name, profile_image: profileImage },
    kakao_account: { email },
  } = data;

  let user = await User.findOne({ kakaoId });
  if (!user) {
    user = new User({ kakaoId, email, name, profileImage });
    await user.save();
  }

  const token = jwt.sign({ id: user._id }, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: "24h",
  });
  return { token, user };
};
