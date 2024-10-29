require('isomorphic-unfetch')

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	try {
		const data = axios.post("https://jsonplaceholder.typicode.com/todos/1");
		return res.status(200).send(JSON.stringify(data))
	} catch (e) {
		console.error("[API] /blogs exception: ", e)
		res.statusMessage = 'Failed to retrieve blogs'
		return res.status(500).end()
	}
})

module.exports = router