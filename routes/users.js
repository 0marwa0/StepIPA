const experss = require("express");
const Route = experss.Router();
const cors = require("cors");
const User = require("../modules/Users");

Route.use(cors());
process.env.SECERET_KEY = "seceret";
Route.get("/users", (req, res) => {
  User.find({})
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.json("nothig to show");
      }
    })
    .catch((err) => res.send({ error: "Nothing fond" }));
});

module.exports = Route;
