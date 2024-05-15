import express, { Express, Request, Response } from "express"
import urlRequestValidator from "./validators/url"
import helmet from "helmet"
import cors from "cors"
import fs from "fs"

const app: Express = express()
const port = process.env.PORT || 3000

app.disable('x-powered-by');
app.use(helmet())
app.use(cors())

app.post('/api/shorten', async (req: Request, res: Response) => {
    const response = urlRequestValidator.validate(req.body)
    if (response.error) {
        return res.status(400).send({ message: response.error.details[0].message, data: {} })
    }
    return res.status(200).send({ message: "Success", data: {} })
})

if (process.env.ENV !== 'TEST') {

    app.listen(port, () => {

        if (!fs.existsSync('./database.sqlite')) {
            fs.writeFileSync('./database.sqlite', '')
            console.log("Database created")
        }
        console.log("Listening on port " + port)

    })

}

export default app

