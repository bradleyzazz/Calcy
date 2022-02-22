var app = require('../../server/index.js');
var request = require('supertest')(app);

describe('calculator api responses', () => {
 // Shut everything down gracefully
 afterAll( (done) => {
    app.close();
    done();
  });

 test("should multiply 2 numbers", () => {
    request.get(`/multiply/5/6`)
      .expect((res) => {
        res.text = 30;
        res.status = 200;
      })
  });

  test("should add 2 numbers", () => {
    request.get(`/add/5/6`)
      .expect((res) => {
        res.text = 11;
        res.status = 200;
      })
  });

  test("should subtract 2 numbers", () => {
    request.get(`/subtract/5/6`)
      .expect((res) => {
        res.text = -1;
        res.status = 200;
      })
  });

  test("should divide 2 numbers", () => {
    request.get(`/subtract/10/2`)
      .expect((res) => {
        res.text = 5;
        res.status = 200;
      })
  });

 test("should error if any numbers are not valid", () => {
    request.get(`/add/cd/6`)
      .expect((res) => {
        res.text = 'Bad numbers!!';
        res.status = 400;
      })
  });
});