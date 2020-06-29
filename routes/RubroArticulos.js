const { Router } = require("express");
const {
  crearRubroArticulo,
  getRubrosArticulos,
  deleteRubrosArticulos,
} = require("../controllers/RubroArticulos");

const router = Router();

router.post("/crear", crearRubroArticulo);

router.get("/get", getRubrosArticulos);

router.put("/delete/:id", deleteRubrosArticulos);

module.exports = router;
