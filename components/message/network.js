import express, { response } from "express";
import { success, error } from "../../network/response.js";
import { sendMessage, showMessages } from "./controller.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messageList = await showMessages();
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

export default router;
