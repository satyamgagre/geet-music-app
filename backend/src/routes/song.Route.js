import {Router} from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log("Song route with GET method");
});

export default router;