import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/api/jobs', (req: Request, res: Response) => {
    res.json({ msg: 'Hello Get jobs' })
})

app.post('/api/jobs/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Hello Post job' })
})

app.put('/api/jobs/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Hello Put job' })
})

app.delete('/api/jobs/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Hello Delete job' })
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

