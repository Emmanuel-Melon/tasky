import * as dotenv from "dotenv";
import express from "express";
export const app = express();
import { databaseURL } from "./config";
import { init } from "./init";


dotenv.config();

/** initialize middleware */
init(app);
