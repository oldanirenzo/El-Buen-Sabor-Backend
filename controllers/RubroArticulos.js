const { response } = require("express");
const RubroArticulo = require("../models/RubroArticuloModel");

const crearRubroArticulo = async (req, res = response) => {
  const { denominacion } = req.body;
  try {
    const rubro = await RubroArticulo.find({ denominacion });
    console.log(rubro);
    if (rubro.length > 2) {
      return res.json({
        ok: false,
        msg: "Ya existe un rubro con esa denominacion",
      });
    }

    const rubroCreado = new RubroArticulo(req.body);
    rubroCreado.save();

    return res.json({
      ok: true,
      rubroCreado,
    });
  } catch (error) {}
};

const getRubrosArticulos = async (req, res = response) => {
  try {
    const rubros = await RubroArticulo.find({ borrado: false });
    res.json({
      ok: true,
      rubros,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al obtener los rubros de articulos.",
    });
  }
};

const deleteRubrosArticulos = async (req, res = response) => {
  const id = req.params.id;
  try {
    await RubroArticulo.findByIdAndUpdate(id, { borrado: true });
    res.json({
      ok: true,
      msg: "Rubro eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al eliminar los rubros de articulos.",
    });
  }
};

module.exports = {
  crearRubroArticulo,
  getRubrosArticulos,
  deleteRubrosArticulos,
};
