var express = require('express');
const { pendingConnection } = require('../util/db');
var router = express.Router();

const standardReply = (res, err, result) => {
  if (err) {
    res.status(400).send(err.message)
  } else {
    res.send(200)
  }
}

/* GET home page. */
router.get('/items', async function (req, res) {
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

router.get('/item/:id', async function (req, res) {
  console.log(req.params.id)

  const connection = await pendingConnection
  connection
    .collection("items")
    .find({ name: req.params.id }).limit(1)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!")
      } else {
        res.json(result[0])
      }
    })
});

router.put('/item/:id', async function (req, res) {
  const connection = await pendingConnection
  connection
    .collection("items")
    .insertOne({
      name: req.params.id,
      label: [req.body.labels],
      category: req.body.category,
      inventory: req.body.inventory,
      created_at: Date.now() / 1000,
      modified_at: Date.now() / 1000,
    }, (err, result) => standardReply(res, err, result))
})

router.patch('/item/:id', async function (req, res) {
  console.log({
    name: req.params.id,
    label: req.body.labels,
    category: req.body.category,
    inventory: req.body.inventory,
    modified_at: Date.now() / 1000,
  })
  const connection = await pendingConnection
  connection
    .collection("items")
    .updateOne({ name: req.params.id }, {
      $set: {
        label: req.body.labels,
        category: req.body.category,
        inventory: req.body.inventory,
      }
    }, (err, result) => standardReply(res, err, result))
})

module.exports = router;
