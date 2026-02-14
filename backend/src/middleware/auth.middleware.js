import { clerkClient } from "@clerk/express";

export const protectRoute = (req, res, next) => {
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({
            message: "Unauthorized - you must be logged in"
        });
    }

    next();
};

export const requireAdmin = async (req, res, next) => {
    try {
        if (!req.auth || !req.auth.userId) {
            return res.status(401).json({
                message: "Unauthorized - you must be logged in"
            });
        }

        const currentUser = await clerkClient.users.getUser(req.auth.userId);

        const isAdmin =
            process.env.ADMIN_EMAIL ===
            currentUser.primaryEmailAddress?.emailAddress;

        if (!isAdmin) {
            return res.status(403).json({
                message: "Forbidden - admin access only"
            });
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
