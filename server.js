//import packages
import express from "express";
import { routes } from "./network/routes.js";

const app = express();

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
