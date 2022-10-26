import express from "express";
import { success, error } from "../../network/response.js";
import { addMessage } from "./controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  success(req, res, "conectado", 200);
});

router.post("/", async (req, res) => {
  try {
    const newMessage = await addMessage(req.body.user, req.body.message);
    if (newMessage) {
      success(req, res, newMessage, 200);
    } else {
      throw Error;
    }
  } catch (err) {
    error(req, res, "error en el server", 500, err);
  }
});

export default router;
