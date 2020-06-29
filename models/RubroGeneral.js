const { Schema, model } = require("mongoose");

const RubroGeneralSchema = Schema({
  denominacion: {
    type: String,
    required: true,
    unique: true,
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("RubroGeneral", RubroGeneralSchema);
