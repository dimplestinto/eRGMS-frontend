import express from "express";
import { Register } from "../../src/pages/authentication/Register";

const router = express.Router();

router.post("/register", register);
