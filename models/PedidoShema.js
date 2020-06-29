const { Schema, model } = require("mongoose");

const PedidoSchema = Schema({
  fecha: {
    type: Number,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  estado: {
    type: Number,
    required: true,
  },
  horaEstimadaFin: {
    type: Date,
  },
  tipoEnvio: {
    type: Number,
    required: true,
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente",
  },
});

module.exports = model("Pedido", PedidoSchema);
