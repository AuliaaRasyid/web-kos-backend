const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderId: {
    type: String,
    required: true,
    unique: true,
    index: true // Ensure that the orderId is indexed
  },
  amount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    required: true
  },
  paymentDate: {
    type: Date,
    default: Date.now
  },
  paymentDuration: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);