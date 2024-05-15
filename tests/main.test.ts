import request from "supertest"
import app from "../app"

describe("Test URL Shortner API", () => {
    it("Should return a 200 with url shortened", async () => {
        const res = await request(app).post("/api/shorten").send({
            "url": "https://www.google.com"
        })
        await expect(res.statusCode).toBe(200)
    })
})