import jwt from "jsonwebtoken";

export const verifyAdmin = (req, res, next) => {
  try {
    // Check for token in the request header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check role
    if (decoded.role !== "admin") {
        return res.status(403).json({ message: "Access denied: Not an admin" });
    }

    // Attach decoded token data to request object
    req.user = decoded;

    next();
    } catch (err) {
    console.error("Auth Error:", err.message);
    res.status(401).json({ message: "Invalid or expired token" });
    }
};
