const ToolDetail = require("../models/toolDetail");

// exports.getAllToolDetails = async (req, res) => {
//   res.send("hello teo-sprint-17-9team haha");
//   try {
//     const toolDetails = await ToolDetail.findAll({});
//     res.status(200).json(toolDetails);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getAllToolDetails = async (req, res) => {
  try {
    // 쿼리 파라미터 추출
    const {
      page = 1,
      perPage = 10,
      field = "title", // 기본 정렬 필드를 'title'로 설정
      order = "asc", // 기본 정렬 순서를 'asc'로 설정
      q,
    } = req.query;

    // 필터 로직
    let filter = {};
    if (q && q !== "undefined") {
      filter = JSON.parse(q);

      // 특정 필드에 대해 문자열 검색을 위한 정규 표현식 사용
      for (const key in filter) {
        filter[key] = { $regex: new RegExp(filter[key], "i") };
      }
    }

    // 정렬 순서 계산
    const sortOrder = order.toLowerCase() === "asc" ? 1 : -1;

    // 페이징 로직
    const skipOptions = (page - 1) * parseInt(perPage);

    // 데이터베이스 쿼리
    const toolDetails = await ToolDetail.find(filter)
      .sort({ [field]: sortOrder })
      .skip(skipOptions)
      .limit(parseInt(perPage));

    // 총 문서 수 계산(페이징을 위함)
    const total = await ToolDetail.countDocuments(filter);

    // 응답 데이터 구조 조정
    const responseData = toolDetails.map((detail) => ({
      toolImg: detail.toolImg,
      title: detail.title,
      subTitle: detail.subTitle,
      createdBy: detail.createdBy,
      description: detail.description,
      company: detail.companyImg, // 'company' 필드 대신 'companyImg' 사용
      keyword:
        detail.keyword instanceof Array
          ? detail.keyword
          : detail.keyword.split(", "), // 'keyword' 필드 배열 변환
      content: detail.content,
      verificationMethod: detail.verificationMethod.map(
        (method) => method.description
      ),
      exampleContent: detail.exampleContent,
    }));

    // 조정된 응답 데이터 전송
    res.status(200).json({
      data: {
        tool: responseData,
      },
      total: total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
