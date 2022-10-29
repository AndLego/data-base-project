import express from "express";
import { success, error } from "../../network/response.js";
import { addUser, showUsers } from "./controller.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let filter = {};
  const { name = null } = req.query;

  name && (filter.name = new RegExp(name, "i"));

  try {
    const listUsers = await showUsers(filter);
    success(req, res, listUsers, 200);
  } catch (err) {
    error(req, res, "Internal error", 500, err);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await addUser(req.body.name);
    success(req, res, data, 201);
  } catch (err) {
    error(req, res, "Internal error", 500, err);
  }
});

export default router;
