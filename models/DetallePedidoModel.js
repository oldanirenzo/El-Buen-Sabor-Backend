const { Schema, model } = require("mongoose");

const DetallePedidoSchema = Schema({
  cantidad: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  pedido: {
    type: Schema.Types.ObjectId,
    ref: "Pedido",
  },
  factura: {
    type: Schema.Types.ObjectId,
    ref: "Factura",
    required: true,
  },
  articuloInsumo: {
    type: Schema.Types.ObjectId,
    rel: "ArticuloInsumo",
  },
  articuloManufacturado: {
    type: Schema.Types.ObjectId,
    ref: "ArticuloManufacturado",
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("DetallePedido", DetallePedidoSchema);
