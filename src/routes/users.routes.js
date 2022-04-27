import { Router } from "express";
import UserController from "../controllers/users.controller";
import SessionController from "../controllers/sessions.controller";

const router = Router();

const userController = new UserController();
const sessionController = new SessionController();

router.post("", userController.store);
router.get("", userController.index);

router.post("/login", sessionController.store);

export default router;
