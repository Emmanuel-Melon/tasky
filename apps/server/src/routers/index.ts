import * as express from "express";

import api from "./api";
import auth from "../auth/router";

const router = express.Router();

router.use("/api", api);
router.use("/auth", auth);

export default router;
