require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const logger = require("./config/logger");
const validateEnv = require("./config/envValidator");

const app = express();

// ── validate environment ──────────────────────────────────────────────────────
validateEnv();

// ── connect database ──────────────────────────────────────────────────────────
connectDB().catch((e) => logger.error(`⚠️  DB unavailable: ${e.message}`));

// ── production middleware ─────────────────────────────────────────────────────
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

// HTTP request logging
const morganFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(morganFormat, { stream: { write: (message) => logger.http(message.trim()) } }));

const limiter = rateLimit({ 
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: { message: "Too many requests from this IP, please try again after 15 minutes" }
});
app.use("/api", limiter);

const contactLimiter = rateLimit({ 
  windowMs: 60 * 60 * 1000, 
  max: 10, 
  message: { message: "Too many contact requests, please try again after an hour" }
});

// ── body parsing ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// ── routes ────────────────────────────────────────────────────────────────────
app.use("/api/about",      require("./routes/about"));
app.use("/api/education",  require("./routes/education"));
app.use("/api/experience", require("./routes/experience"));
app.use("/api/projects",   require("./routes/projects"));
app.use("/api/skills",     require("./routes/skills"));
app.use("/api/contact",    contactLimiter, require("./routes/contact"));
app.use("/api/admin",      require("./routes/admin"));

// ── base routes ───────────────────────────────────────────────────────────────
app.get("/", (_, res) => res.send("🚀 Pushkar's Portfolio API is live!"));
app.get("/api/health", (_, res) => res.json({ 
  status: "ok", 
  time: new Date(),
  env: process.env.NODE_ENV 
}));

// ── global error handler ──────────────────────────────────────────────────────
app.use(require("./middleware/errorHandler"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});

