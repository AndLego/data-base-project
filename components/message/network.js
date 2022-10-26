import express from "express";
import { success, error } from "../../network/response.js";

const router = express.Router();

router.get("/", (req, res) => {
  success(req, res, "conectado", 200);
});

router.post("/", (req, res) => {
  if (req.query.error == "ok") {
    error(req, res, "error simulado", 500, "es solo una simulacion de errores");
  } else {
    success(req, res, "mensaje creado correctamente");
  }
});

export default router;
