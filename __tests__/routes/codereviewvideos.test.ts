import server from "../../src/server"
import request from "supertest"

afterEach((done) => {
    server.close()
    done()
})

describe("routes/codereviewvideos", () => {

    const games = [
        "LOL",
        "Battlefield"
    ]

    games.forEach((game: string) => {
        it("should allow adding a game to the list", async () => {
            const res = await request(server)
                .post('/codereviewvideos')
                .send({ game })
    
            expect(res.status).toEqual(201)
            expect(res.type).toEqual('application/json')
            expect(res.body).toEqual({
                games: [
                    game,
                ]
            })
        })
    })
})