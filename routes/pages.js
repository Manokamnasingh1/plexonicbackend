import express from "express";
import Page from "../models/Page.js";
import auth from "../middleware/auth.js"; // JWT middleware

const router = express.Router();

// 1️⃣ Create / Update Page (auth required)
router.post("/", auth, async (req, res) => {
  try {
    const { pageId, title, blocks } = req.body;

    let page;
    if (pageId) {
      page = await Page.findOneAndUpdate(
        { _id: pageId, author: req.user },
        { title, blocks },
        { new: true }
      );
      if (!page) return res.status(404).json({ msg: "Page not found" });
    } else {
      page = new Page({ title, blocks, author: req.user });
      await page.save();
    }

    res.json(page);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// 2️⃣ Get all pages for logged-in user (auth required)
router.get("/", auth, async (req, res) => {
  try {
    const pages = await Page.find({ author: req.user }).sort({ updatedAt: -1 });
    res.json(pages);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// 3️⃣ Public route to view page without login
router.get("/public/:id", async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (!page) return res.status(404).json({ msg: "Page not found" });
    res.json(page);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// 4️⃣ Get single page by ID (auth required)
router.get("/:id", auth, async (req, res) => {
  try {
    const page = await Page.findOne({ _id: req.params.id, author: req.user });
    if (!page) return res.status(404).json({ msg: "Page not found" });
    res.json(page);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// 5️⃣ Update page by ID (auth required)
router.put("/:id", auth, async (req, res) => {
  try {
    const { title, blocks } = req.body;
    const page = await Page.findOneAndUpdate(
      { _id: req.params.id, author: req.user },
      { title, blocks },
      { new: true }
    );
    if (!page) return res.status(404).json({ msg: "Page not found" });
    res.json(page);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;

