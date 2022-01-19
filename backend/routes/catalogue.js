var express = require("express");
const { pendingConnection } = require("../util/db");
var router = express.Router();

router.get("/list", async function (req, res) {
  const connection = await pendingConnection;
  connection
    .collection("items")
    .find({ deleted: false })
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

router.get("deleted", async function (req, res) {
  const connection = await pendingConnection;
  connection
    .collection("items")
    .find({ deleted: true })
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

router.post("restore/:id", async function (req, res) {
  const connection = await pendingConnection;
  connection.collection("items").updateOne(
    { name: req.params.id },
    {
      $set: {
        deleted: false,
      },
      $unset: "deleteComment",
    },
    (err, result) => standardReply(res, err, result)
  );
});

module.exports = router;
