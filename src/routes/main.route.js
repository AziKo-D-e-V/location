const { Router } = require("express");
const { HomePage, MainPage, GetAllDistance } = require("../controller/main.controller");

const router = new Router();

router.get("/", HomePage)
router.get("/getall", GetAllDistance)
router.post("/send-distance", MainPage)

module.exports =router;