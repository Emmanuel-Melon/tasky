import { Router } from "express";

import boards from "../boards/router";
import tasks from "../tasks/router";
import users from "../users/router";

const router = Router();

router.use("/boards", boards);
router.use("/tasks", tasks);
router.use("/users", users);

export default router;
