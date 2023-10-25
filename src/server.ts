import express from "express";
import { setupSwagger } from "./docs/swagger";
import { setupRoutes } from "./router/routes";
import { appConfig } from "./configs";

try {
  const app = express();

  const port = appConfig.port;

  setupRoutes(app);

  setupSwagger(app);

  const server_status = {
    Status: "ONLINE",
    Port: port,
    Redis: 6379,
    Address: `http://localhost/${port}`,
  };

  app.listen(port, () => {
    console.table(server_status);
  });
} catch (ex) {
  throw ex;
}
