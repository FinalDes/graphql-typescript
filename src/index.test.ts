/* tslint:disable:no-console*/
import request = require("supertest");
import {App} from "./index";

describe("Graphql test", () => {
  it("Get Hi", (done) => {
    request(App)
    .post("/graphql")
    .set("Content-Type", "application/json; charset=UTF-8")
    .send({query: "{hi}"})
    .expect(200)
    .end((err, res) => {
      res.text.should.to.equal(JSON.stringify({data: {hi: "Hello Word"}}));
      done();
    });
  });
  // afterEach((done) => {
  //   App.close();
  //   done();
  // });
});
