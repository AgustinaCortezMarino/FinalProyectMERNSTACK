const express = require("express");
const router = express.Router();
const {
  getLugares,
  getLugarById,
  createNewLugar,
  deleteLugar,
  updateLugar,
} = require("../controllers/lugares.controller");

//COMPLETE the router
router.get("/", getLugares);
router.get("/:id", getLugarById);
router.post("/new", createNewLugar);
router.delete("/delete/:id", deleteLugar);
router.patch("/edit/:id", updateLugar);
module.exports = router;
