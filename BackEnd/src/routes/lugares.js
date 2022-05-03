const express = require("express");
const router = express.Router();
<<<<<<< HEAD

=======
>>>>>>> ff31818822fe80cf0f781099135b02adba7f9e66
const {
  getLugares,
  getLugarById,
  createNewLugar,
  deleteLugar,
  updateLugar,
} = require("../controllers/lugares.controller");

//COMPLETE the router
router.get("/lugares", getLugares);
router.get("/lugares/:id", getLugarById);
router.post("/lugares", createNewLugar);
router.delete("/lugares/:id", deleteLugar);
router.patch("/lugares/:id", updateLugar);
module.exports = router;
