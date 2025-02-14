import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

// Path example: /api/v1/auth/signUp (POST)
authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn)
authRouter.post("/sign-out", signOut)

export default authRouter;