import express from "express";
import config from "config";
import { connect } from "./utils/connect";
import { log } from "./utils/logger";

const app = express();

const port = config.get<number>("port");

app.listen(port, async () => {
  log.info(`App is runnig at http://localhost:${port}`);
  await connect();
});
