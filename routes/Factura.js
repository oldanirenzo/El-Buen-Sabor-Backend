const { Router } = require("express"); // Desestructuro el express para conseguir el Router
const { crearFactura } = require("../controllers/Factura");
const { crearDetalle } = require("../controllers/DetallePedido");

const router = Router();

router.post("/new", crearFactura);

module.exports = router;
