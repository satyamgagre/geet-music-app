import {Router} from "express";
import {User} from "../models/user.model.js"

const router = Router();

router.post("/callback",  async(req, res) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;

        const user = await User.findOne({clerkId: id});
    } catch (error) {
        
    }
});

export default router;