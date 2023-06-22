let patient = {};

module.exports = async function (context, req) {
  // 요청을 처리할 POST 또는 GET 메서드 선택
  if (req.method === 'POST') {
    // POST 요청을 처리하여 환자 정보를 patient 객체에 저장
    patient = req.body;

    context.res = {
      status: 200,
      body: {
        message: '환자 정보가 정상적으로 추가되었습니다.',
        patient: patient
      },
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } else if (req.method === 'GET') {
    // GET 요청을 처리하여 환자 정보 객체를 반환
    context.res = {
      status: 200,
      body: patient,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } else {
    context.res = {
      status: 400,
      body: '잘못된 요청입니다.',
      headers: {
        'Content-Type': 'text/plain'
      }
    };
  }
};
