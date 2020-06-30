const { Router } = require("express");
const {
  crearRubroArticulo,
  getRubrosArticulos,
  deleteRubrosArticulos,
  updateRubrosArticulos,
} = require("../controllers/RubroArticulos");

const router = Router();

router.post("/crear", crearRubroArticulo);

router.get("/get", getRubrosArticulos);

router.put("/delete/:id", deleteRubrosArticulos);

router.put("/update/:id", updateRubrosArticulos);

module.exports = router;
