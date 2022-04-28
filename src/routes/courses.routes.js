import { Router } from "express";
import CoursesController from "../controllers/courses.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const cousersController = new CoursesController();

const router = Router();

router.use(ensureAuthMiddleware);

router.post("", cousersController.store);
router.get("", cousersController.index);

export default router;
