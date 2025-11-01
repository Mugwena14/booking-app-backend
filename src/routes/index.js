import { Router } from "express";
import services from "./services.js";
import bookings from "./bookings.js";
import availability from "./availability.js";
import customers from "./customers.js";
import admin from "./admin.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";

const router = Router();

// Public routes
router.use("/services", services);
router.use("/bookings", bookings);
router.use("/availability", availability);
router.use("/customers", customers);

// Protected admin routes
router.use("/admin/services", verifyAdmin, services);
router.use("/admin/bookings", verifyAdmin, bookings);
router.use("/admin/availability", verifyAdmin, availability);
router.use("/admin/customers", verifyAdmin, customers);
router.use("/admin", admin);
  
export default router;
