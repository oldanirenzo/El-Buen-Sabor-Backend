const { response } = require("express"); // Desestructuro el 'response' de express para conservar el IntelliSens ? (Para que al poner res.json me salga la ayuda del IDE)
const Factura = require("../models/FacturaModel");
const { crearDetalle } = require("../controllers/DetallePedido");

const crearFactura = async (req, res = response) => {
  console.log(req.body);

  let facturaEncontrada = await Factura.findOne({ numero: req.body.numero });
  try {
    const factura = await Factura(req.body);

    if (
      facturaEncontrada !== null &&
      factura.numero === facturaEncontrada.numero
    ) {
      return res.json({
        ok: false,
        msg: "Ya existe ese numero de factura",
      });
    }
    factura.save();

    await crearDetalle(factura.id, req.body.detalle);

    res.status(201).json({
      ok: true,
      factura,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};



module.exports = {
  crearFactura,
};
