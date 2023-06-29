//require dependencies
const router = require("express").Router();

//call routes
const api = require("./api")
const html = require("./html")

//Route each individually
router.use("/api", api)
router.use("/", html)

module.exports = router