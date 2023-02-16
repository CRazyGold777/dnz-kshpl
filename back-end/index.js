const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.get("/", (req, res) => {
	res.send("HELLO nodemon")
})

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
})