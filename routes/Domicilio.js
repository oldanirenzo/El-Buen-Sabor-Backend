const { Router } = require("express");
const { crearDomicilio, getDomicilios, getDomiciliosUsuario, deleteDomicilio } = require("../controllers/Domicilio");

const router = Router();

router.post("/crear", crearDomicilio);

router.get('/get/:usuario', getDomiciliosUsuario)

router.get('/get', getDomicilios)

router.put('/delete/:id', deleteDomicilio)

module.exports = router;
