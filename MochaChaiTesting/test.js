const chai = require("chai");
const chaiHttp = require('chai-http');
const server = require('./Index');
const should = chai.should();
chai.use(chaiHttp);
describe("test suite", () => {
    it("should test welcome GET", (done) => {
        chai.request(server)
            .get("/welcome")
            .end(function(req, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it("should test hello POST", (done) => {
        chai.request(server)
            .post("/hello")
            .send({
                firstname: "tarun",
                lastname: "parve"
            })
            .end(function(req, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a("object");
                res.body.should.have.property("id");
                res.body.id.should.be.a("number");
                res.body.id.should.equal(101);

                res.body.should.have.property("name");
                res.body.name.should.be.a("String");
                res.body.name.should.equal("tarun");

                res.body.should.have.property("role");
                res.body.role.should.be.a("String");
                res.body.role.should.equal("developer");
                done();
            });
    });

});

// const chai = require("chai");
// const chaiHttp = require('chai-http');
// const server = require('./Index');
// const should = chai.should();

// chai.use(chaiHttp);

// describe(" test suite", () => {
//     it('should test welcome json', function(done) {
//         chai.request(server)
//             .get('/welcome')
//             .end(function(err, res) {
//                 res.should.have.status(200);
//                 res.should.be.json;
//                 done();
//             });
//     });
//     it('should test POST', function(done) {
//         chai.request(server)
//             .post('/hello')
//             .send({
//                 'name': 'Ram',
//                 'lastName': 'Kumar'
//             })
//             .end(function(err, res) {
//                 res.should.have.status(200);
//                 res.should.be.json;
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('id');
//                 res.body.id.should.be.a('number');
//                 res.body.id.should.equal(101);
//                 done();
//             });
//     });

// })