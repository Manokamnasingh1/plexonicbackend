import Page from "../models/Page.js";

export const createPage = async (req, res) => {
  const { title, blocks, status } = req.body;
  const page = await Page.create({
    title,
    blocks,
    status,
    createdBy: req.user,
  });
  res.json(page);
};

export const getPage = async (req, res) => {
  const page = await Page.findById(req.params.id);
  if (!page) return res.status(404).json({ message: "Page not found" });
  res.json(page);
};

export const updatePage = async (req, res) => {
  const page = await Page.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(page);
};
