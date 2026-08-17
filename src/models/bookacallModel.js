import { Schema, model, models } from "mongoose";

const bookacallSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  companyName: { type: String, required: true },
  country: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BookacallModel = models.BookACall || model("BookACall", bookacallSchema);
export default BookacallModel;
