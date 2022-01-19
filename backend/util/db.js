const { MongoClient } = require('mongodb');

const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

const uri = `mongodb+srv://${user}:${password}@${host}/shopify2022backend?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let pendingConnection = client
	.connect()
	.catch(e => {
		console.log(e)
	})
	.then(db => {
		return db.db("inventory")
	})

module.exports = {
	pendingConnection
}