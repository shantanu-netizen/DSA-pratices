import express from "express";
import { create, deletestudent, getStudent, update } from "./controllers/controllers.mjs";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello world");
});

router.post("/create", create);
router.get("/students/:id", getStudent);
router.put("/create/:id", update)
router.delete("/delete/:id", deletestudent);
export default router;