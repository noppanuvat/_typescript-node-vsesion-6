import "mocha"
import * as chai from "chai"

import * as test from "../src/controllers/testController"
import * as server from "../src/server"

import ChaiHttp = require("chai-http")

chai.use(ChaiHttp)

describe("####----- TEST ------####", () => {
  describe("#### getApiReturn function ####", () => {

    it("should return getApiReturn", () => {
      const result = test.getApiReturn()
      const myObj = {size: 10, label: "Size 10 Object"}
      chai.expect(result).to.deep.equal(myObj)
    })

  })

  describe("#### getApi function ####", () => {

    it("should return getApi", (done) => {
      chai.request(server)
      .get("/")
      .query({names: "foo"})
      .end((err, res) => {
        // tslint:disable-next-line:no-unused-expression
        chai.expect(err).to.be.null
        chai.expect(res).to.have.status(200)
        chai.expect(res.text).to.equal("foo")
        done()
      })
    })
  })

})
