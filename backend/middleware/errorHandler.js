const logger = require("../config/logger");

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  logger.error(`❌ ${err.name}: ${err.message}`);
  if (process.env.NODE_ENV !== "production") {
    logger.debug(err.stack);
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: "Validation error", errors });
  }
  if (err.code === 11000) {
    return res.status(409).json({ message: "Duplicate entry" });
  }
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  res.status(err.statusCode || 500).json({
    message: err.message || "Internal server error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

