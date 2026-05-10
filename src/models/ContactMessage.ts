import mongoose, { Schema, model, models } from "mongoose";

const ContactMessageSchema = new Schema({
  name:    { type: String, required: true, maxlength: 100 },
  email:   { type: String, required: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  subject: { type: String, maxlength: 200 },
  message: { type: String, required: true, maxlength: 2000 },
  read:    { type: Boolean, default: false },
  ip:      String,
}, { timestamps: true });

// Avoid overwriting model if it exists
export const ContactMessage = models.ContactMessage || model("ContactMessage", ContactMessageSchema);
