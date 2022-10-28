//import packages
import express from "express";
import { routes } from "./network/routes.js";

import "./db.js";
import { connect } from "./db.js";

const app = express();

connect();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

//Router
routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`dancing on port ${port}`);
});
