import { Schema, model, models } from "mongoose";

const contactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  cmpnyEmail: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  companyName: { type: String, required: true },
  country: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactModel = models.WebsiteContact || model("WebsiteContact", contactSchema);
export default ContactModel;