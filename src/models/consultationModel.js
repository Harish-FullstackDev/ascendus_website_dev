import { Schema, model, models } from "mongoose";

const consultationSchema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  message: { 
    type: String, 
    required: false,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'completed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true // This will automatically manage createdAt and updatedAt
});

// Update the updatedAt timestamp before saving
consultationSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const ConsultationModel = models.Consultation || model("Consultation", consultationSchema);
export default ConsultationModel;