import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import authRoutes from "./routes/auth.js";
import pageRoutes from "./routes/pages.js"; // ✅ import page routes

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pages", pageRoutes); // ✅ add pages routes

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { dbName: "webpage_builder" })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Socket.IO setup
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("🟢 A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

// Basic test route
app.get("/", (req, res) => {
  res.send("🚀 Backend running successfully!");
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);

