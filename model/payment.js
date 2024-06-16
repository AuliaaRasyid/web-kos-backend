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
    required: true,
    enum: ['PENDING', 'PAID', 'CANCELLED'],  // Validasi untuk memastikan hanya status tertentu yang diterima
    default: 'PENDING'
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
    default: null  // Field optional, tidak selalu diisi pada saat pembuatan
  },
  snap_token: {
    type: String,
    required: true
  },
  snap_redirect_url: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);