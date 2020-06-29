const { response } = require("express"); // Desestructuro el 'response' de express para conservar el IntelliSens ? (Para que al poner res.json me salga la ayuda del IDE)
const DetallePedido = require("../models/DetallePedidoModel");

const crearDetalle = async (facturaId, req, res = response) => {

  const detalle = new DetallePedido(req);

  try {
    detalle.factura = facturaId;

    const detalleCreado = await DetallePedido(detalle);

    detalleCreado.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

module.exports = {
  crearDetalle,
};
