import express from "express";
const router = express.Router();
import { registerAdmin, loginAdmin } from "../controllers/adminController.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";

// Public routes
router.post("/setup", registerAdmin);
router.post("/login", loginAdmin);

// Protected routes
router.get("/", verifyAdmin, (req, res) => {
    res.json({ message: `Admin ${req.user.email} accessed dashboard.` });
});

export default router;
