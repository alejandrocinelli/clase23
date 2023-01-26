import { Router } from "express";
import { setController } from "../controllers/index.js";

const router = Router();

router.get("/set", setController.set);
router.get("/setEx", setController.setEx);
router.get("/get", setController.getCookies);
router.get("/clear", setController.clearSet);
router.get("/setSigned", setController.setSigned);


export default router; 