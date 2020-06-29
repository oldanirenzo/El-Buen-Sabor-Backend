const { Router } = require("express");
const {
  crearRubro,
  obtenerRubros,
  updateRubro,
  deleteRubro,
} = require("../controllers/RubroGeneral");

const router = Router();

router.post("/crear", crearRubro);

router.get("/get", obtenerRubros);

router.put("/update/:id", updateRubro);

router.put("/delete/:id", deleteRubro);

module.exports = router;
