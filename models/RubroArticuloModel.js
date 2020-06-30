const { Schema, model } = require("mongoose");

const RubroArticuloSchema = Schema({
  denominacion: {
    type: String,
    required: true,
    unique : true
  },
  rubroArticulo: {
    type: Schema.Types.ObjectId,
    ref: "RubroArticulo",
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("RubroArticulo", RubroArticuloSchema);
