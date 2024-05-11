const ToolTemplate = require("../models/toolTemplate");

exports.createTemplate = async (req, res) => {
  try {
    // 요청 본문에서 템플릿 데이터를 추출합니다.
    const {
      toolName,
      ideaOverview,
      thinkBackground,
      marketTheory,
      bigxyzTheory,
      smallxyzTheory,
      pretotypePlan,
    } = req.body;
    // 인증 미들웨어에서 설정된 현재 사용자의 ID를 가져옵니다.
    const userId = req.user._id; // 인증 미들웨어가 req.user에 사용자 정보를 설정해야 합니다.

    // 새 템플릿 문서를 생성하고 사용자 ID를 포함시킵니다.
    const template = new ToolTemplate({
      userId, // 사용자 ID 추가
      toolName,
      ideaOverview,
      thinkBackground,
      marketTheory,
      bigxyzTheory,
      smallxyzTheory,
      pretotypePlan,
    });

    await template.save(); // DB에 템플릿 저장
    res
      .status(201)
      .json({ message: "검증툴 작성이 완료되었습니다.", template });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
