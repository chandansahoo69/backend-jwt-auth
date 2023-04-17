import express from "express";
import {
  checking,
  myInfo,
  refreshToken,
  welcome,
} from "../controllers/auth.js";
import verifyToken from "../middleware/authenticate.js";

const router = express.Router();

router.get("/me", verifyToken, myInfo);
router.post("/refresh-token", refreshToken);

export default router;
