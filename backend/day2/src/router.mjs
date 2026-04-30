import express from "express"
import { register, login } from "./controllers/user.mjs";

const router = express.Router()
router.get("/", (req, res) => {
        res.send("hello world");
})
router.post("/register", register)
router.post("/login",login)
export default router