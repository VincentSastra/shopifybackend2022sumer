var express = require("express");
const { pendingConnection } = require("../util/db");
var router = express.Router();

const standardReply = (res, err, result) => {
  if (err) {
    res.status(400).send(err.message);
  } else {
    res.send(200);
  }
};

router.get("/list", async function (req, res) {
  const connection = await pendingConnection;
  connection
    .collection("items")
    .find({ $or: [{ deleted: false }, { deleted: { $exists: false } }] })
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

router.get("/deleted", async function (req, res) {
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

router.post("/restore/:id", async function (req, res) {
  const connection = await pendingConnection;
  connection.collection("items").updateOne(
    { name: req.params.id },
    {
      $set: {
        deleted: false,
      },
      $unset: {
        deletedComment: 1,
      },
    },
    (err, result) => standardReply(res, err, result)
  );
});

router.post("/delete/:id", async function (req, res) {
  const connection = await pendingConnection;
  console.log(req.body);
  connection.collection("items").updateOne(
    { name: req.params.id },
    {
      $set: {
        deleted: true,
        deleteComment: req.body.deleteComment,
      },
    },
    (err, result) => standardReply(res, err, result)
  );
});

module.exports = router;
