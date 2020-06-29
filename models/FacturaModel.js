const { Schema, model } = require("mongoose");

const FacturaSchema = Schema({
  fecha: {
    type: Date,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
    unique: true
  },
  montoDescuento: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  formaPago: {
    type: String,
    required: true,
  },
  nroTarjeta: {
    type: String,
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Factura", FacturaSchema);
