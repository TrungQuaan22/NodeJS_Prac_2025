import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello, Twitter API!')
})

app.use('/api', router)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
