var express = require('express');
const { pendingConnection } = require('../util/db');
var router = express.Router();

router.get('/list', async function (req, res) {
	const connection = await pendingConnection
	connection
		.collection("items")
		.find({}).limit(50)
		.toArray(function (err, result) {
			if (err) {
				res.status(400).send("Error fetching listings!")
			} else {
				res.json(result)
			}
		})
});

module.exports = router;
