import mongoose from "mongoose";

const blockSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, required: true },
  content: { type: String }, // for text/button/card
  src: { type: String },     // for image
  alt: { type: String },
  link: { type: String },
  width: { type: String },
  height: { type: String },
  items: [String],           // for list
  fields: [
    {
      type: { type: String },
      label: { type: String }
    }
  ],
  title: { type: String },   // for card
  fontSize: { type: String },
  color: { type: String },
  backgroundColor: { type: String },
  textAlign: { type: String },
  padding: { type: String },
  margin: { type: String },
}, { _id: false });

const pageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  blocks: [blockSchema],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

export default mongoose.model("Page", pageSchema);

