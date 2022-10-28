import express from "express";
import { success, error } from "../../network/response.js";
import { sendMessage, showMessages, updateMessage } from "./controller.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let filter = {};
  const { user = null, message = null } = req.query;

  user && (filter.user = new RegExp(user, "i"));
  message && (filter.message = new RegExp(message, "i"));

  try {
    const messageList = await showMessages(filter);
    success(req, res, messageList, 200);
  } catch (err) {
    error(req, res, "unexpected error", 500, err);
  }
});

router.post("/", async (req, res) => {
  const { user, message } = req.body;
  try {
    const newMessage = await sendMessage(user, message);
    success(req, res, newMessage, 200);
  } catch (err) {
    error(req, res, "invalid data", 400, err);
  }
});

//parametros de la ruta, id, nos generea una variable
//para saber que queremos modificar en la url
router.patch("/:id", async (req, res) => {
  try {
    const update = await updateMessage(req.params.id, req.body.message);
    success(req, res, update, 200);
  } catch (err) {
    error(req, res, "error interno", 500, err);
  }
});

export default router;
