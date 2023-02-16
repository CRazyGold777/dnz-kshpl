const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001



app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
})

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}.`)
})