import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.Route.js"
import adminRoutes from "./routes/admin.Route.js"
import authRoutes from "./routes/auth.Route.js"
import songRoutes from "./routes/song.Route.js"
import albumRoutes from "./routes/album.Route.js";
import statRoutes from "./routes/stat.Route.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
