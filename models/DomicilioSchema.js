const { Schema, model } = require("mongoose");

const DomicilioSchema = Schema({
  calle: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  localidad: {
    type: String,
    required: true,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
    required: true,
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Domicilio", DomicilioSchema);
