const { response } = require("express");
const RubroGeneral = require("../models/RubroGeneralModel");

const crearRubro = async (req, res = response) => {
  const { denominacion } = req.body;
  const rubro = new RubroGeneral(req.body);

  try {
    let rubroEncontrado = await RubroGeneral.findOne({ denominacion });

    if (rubroEncontrado) {
      return res.status(500).json({
        ok: false,
        msg: "Ya existe un rubro con esa denominacion",
      });
    }
    rubro.save();
    return res.status(201).json({
      rubro,
    });
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      msg: "Error en la creacion del rubro",
    });
  }
};

const obtenerRubros = async (req, res = response) => {
  try {
    const rubros = await RubroGeneral.find({ borrado: false });
    res.status(200).json({
      ok: true,
      rubros,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: "Error en la obtencion de rubros",
    });
  }
};

const updateRubro = async (req, res = response) => {
  const id = req.params.id;
  const { denominacion } = req.body;
  try {
    const rubroEncontrado = await RubroGeneral.findById(id);
    if (denominacion !== undefined) {
      const rubro = await RubroGeneral.findByIdAndUpdate(id, {
        ...rubroEncontrado,
        denominacion,
      });

      return res.json({
        ok: true,
        rubro,
      });
    } else {
      const rubro = await RubroGeneral.findByIdAndUpdate(id, {
        borrado: false,
      });
      return res.json({
        ok: true,
        rubro,
      });
    }
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: "Error en la actualizacion del rubro",
    });
  }
};

const deleteRubro = async (req, res = response) => {
  const id = req.params.id;
  try {
    await RubroGeneral.findByIdAndUpdate(id, { borrado: true });
    res.json({
      ok: true,
      msg: "Rubro eliminado correctamente",
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: "Error en la actualizacion del rubro",
    });
  }
};

module.exports = {
  crearRubro,
  obtenerRubros,
  updateRubro,
  deleteRubro,
};
