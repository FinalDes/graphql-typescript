/* tslint:disable:no-console*/
import request = require("supertest");
import App from "./app";

const result = {data: {hi: "Hello Word"}};

describe("Graphql test", () => {
  test("Get Hi, content-type application/json", (done) => {
    request(App)
    .post("/graphql")
    .set("Content-Type", "application/json; charset=UTF-8")
    .send({query: "{hi}"})
    .expect(200)
    .end((err, res) => {
      expect(res.body).toEqual(result);
      done();
    });
  });
  test("Get Hi, content-type application/x-www-form-urlencoded", (done) => {
    request(App)
    .post("/graphql")
    .set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
    .send({query: "{hi}"})
    .expect(200)
    .end((err, res) => {
      expect(res.body).toEqual(result);
      done();
    });
  });
  test("Get Hi, content type application/graphql", (done) => {
    request(App)
    .post("/graphql")
    .set("Content-Type", "application/graphql; charset=UTF-8")
    .send("{hi}")
    .expect(200)
    .end((err, res) => {
      expect(res.body).toEqual(result);
      done();
    });
  });
  // afterEach((done) => {
  //   App.close();
  //   done();
  // });
});
