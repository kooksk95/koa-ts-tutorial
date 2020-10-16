import server from "../../src/server"
import request from "supertest"

afterEach((done) => {
    server.close();
    done();
});

describe("routes/healthcheck", () => {
    it("should hh", async () => {
        const res = await request(server).get('/ping')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual('application/json')
        expect(res.body.data).toEqual('hh')
    })
})