import message from "../components/message/network.js";

const routes = (server) => {
  server.use("/xxx/", message);
};

export { routes };
