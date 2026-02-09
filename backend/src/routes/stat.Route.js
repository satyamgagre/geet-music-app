import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log("Stats route with GET method");
});

export default router;